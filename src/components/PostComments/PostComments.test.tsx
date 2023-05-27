import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar 2 comentários', () => {
        render(<PostComment/>);

        const button = screen.getByTestId('btn-comment');
        const comment = screen.getByTestId('txt-comment')

        fireEvent.change(comment, {
            target: {
                value: 'Primeiro Comentário',
            }
        });
        fireEvent.click(button);
    
        fireEvent.change(comment, {
            target: {
                value: 'Segundo Comentário',
            }
        });
        fireEvent.click(button);

        const result = screen.getAllByTestId('item-comment');
        expect(result).toHaveLength(2);
    });

});
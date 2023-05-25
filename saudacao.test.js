const saudacao = require('./saudacao')

describe('teste para saudacao'. () => {
    test('teste deverar retornar Olá, Maria', () => {
        const olaMaria = saudacao.dizOla('Maria')
        expect(olaMaria).toBe('Olá, Maria')
        expect(true).toBeTruthy();
    })
})
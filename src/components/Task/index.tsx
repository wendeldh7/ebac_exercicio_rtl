import { Actions, Buttons, Description, Tag, TaskCard, Title } from './styles'

const Task = () => (
  <TaskCard>
    <Title>Titulo da tarefa</Title>
    <Tag>Importante</Tag>
    <Tag>Importante</Tag>
    <Description></Description>
    <Actions>
      <Buttons>Editar</Buttons>
      <Buttons>Remover</Buttons>
    </Actions>
  </TaskCard>
)

export default Task

import { Card, Contador, Label } from './styles'

export type Props = {
  ativo?: boolean
  contador: number
  legenda: string
}

const FilterCard = ({ ativo, contador, legenda }: Props) => (
  <Card ativo={ativo}>
    <Contador>{contador}</Contador>
    <Label>{legenda}</Label>
  </Card>
)

export default FilterCard

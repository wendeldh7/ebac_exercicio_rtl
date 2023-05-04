import FilterCard from '../../components/FilterCard'
import { Aside, Camp, Filters } from './styles'

const SideBar = () => (
  <Aside>
    <div>
      <Camp type="text" placeholder="Buscar" />
      <Filters>
        <FilterCard legenda="pendentes" contador={1}></FilterCard>
        <FilterCard legenda="concluídas" contador={2}></FilterCard>
        <FilterCard legenda="urgentes" contador={3}></FilterCard>
        <FilterCard legenda="importantes" contador={4}></FilterCard>
        <FilterCard legenda="normal" contador={5}></FilterCard>
        <FilterCard ativo legenda="todas" contador={6}></FilterCard>
      </Filters>
    </div>
  </Aside>
)

export default SideBar

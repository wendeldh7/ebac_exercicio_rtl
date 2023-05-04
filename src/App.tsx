import React from 'react'
import GlobalStyle, { Container } from './styles'
import SideBar from './Containers/Sidebar'
import Tasks from './Containers/Tasks'
import Task from './components/Task'

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Container>
        <SideBar></SideBar>
        <Tasks></Tasks>
      </Container>
    </>
  )
}

export default App

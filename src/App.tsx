import React from 'react'
import styled from 'styled-components'
import {AppRoute} from "./pages/routes"
import {deviceMax} from "./assets/constants/primitives"

const App = () => {
  return (
    <AppWrapper className="App">
      <AppRoute/>
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  height: 100vh;
  font-style: normal;

  @media screen and ${deviceMax.md} {
    margin: 0;
  }
`
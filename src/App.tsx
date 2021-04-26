import React from 'react'
import styled from 'styled-components'
import {Route, Switch} from "react-router-dom"
import {routes} from "./pages/routes"
import {deviceMax} from "./styles/Primitives"
import './App.css'

const App = () => {
  return (
      <AppWrapper className="App">
        <Switch>
          {routes.map((route, index) => (
              <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main/>}
              />
          ))}
        </Switch>
      </AppWrapper>
  )
}

export default App

const AppWrapper = styled.div`
  min-height: 100vh;
  font-style: normal;
  
  @media screen and ${deviceMax.md} {
    margin: 0;
  }
`
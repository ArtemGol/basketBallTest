import {SignIn} from "./signIn/SignIn"
import {CardTeams} from "./cartTeams/CardTeams"
import {AddUpdateTeam} from "./addUpdateTeam/AddUpdateTeam"
import {DetailsTeam} from "./detailsTeam/DetailsTeam"
import {SignUp} from "./signUp/SignUp"
import {CardPlayers} from "./cartPlayers/CardPlayers"
import {DetailsPlayer} from "./detailsPlayer/DetailsPlayer"
import {AddUpdatePlayer} from "./addUpdatePlayer/AddUpdatePlayer"
import {NotFound} from "../component/NotFound";
import {Redirect, Route, Switch} from "react-router-dom"
import React, {FC} from "react"
import {useAuthSelector} from "../modules/auth/authSlice"

export const mainRoutes = {
  SignInPath: '/sign_in',
  SignUpPath: '/sign_up',
  CardTeamsPath: '/card_teams',
  TeamDetailsPath: '/team/',
  AddUpdateTeamPath: '/add_update_team',
  CardPlayersPath: '/card_players',
  PlayerDetailsPath: '/player/',
  AddUpdatePlayerPath: '/add_update_player'
}

export const AppRoute: FC = () => {
  const isAuth = useAuthSelector(state => state.auth.isAuth)
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          render={() => isAuth
            ? route?.private !== true
              ? <Redirect to={mainRoutes.CardTeamsPath}/>
              : route.main
            : route?.private === true
              ? <Redirect to={mainRoutes.SignInPath}/>
              : route.main}
        />
      ))}
    </Switch>
  )
}

const routes = [
  {
    path: "/",
    exact: true,
    main: <SignIn/>
  },
  {
    path: mainRoutes.SignInPath,
    main: <SignIn/>
  },
  {
    path: mainRoutes.SignUpPath,
    main: <SignUp/>
  },
  {
    path: mainRoutes.CardTeamsPath,
    main: <CardTeams/>,
    private: true
  },
  {
    path: mainRoutes.TeamDetailsPath + ':teamID',
    main: <DetailsTeam/>,
    private: true
  },
  {
    path: mainRoutes.AddUpdateTeamPath,
    main: <AddUpdateTeam/>,
    private: true
  },
  {
    path: mainRoutes.CardPlayersPath,
    main: <CardPlayers/>,
    private: true
  },

  {
    path: mainRoutes.PlayerDetailsPath + ':playerID',
    main: <DetailsPlayer/>,
    private: true

  },
  {
    path: mainRoutes.AddUpdatePlayerPath,
    main: <AddUpdatePlayer/>,
    private: true
  },
  {
    path: "*",
    main: <NotFound/>
  }
]
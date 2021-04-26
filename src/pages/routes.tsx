import {SignIn} from "./authorizationPage/SignIn"
import {CardTeams} from "./cartPage/CardTeams"
import {AddUpdateTeam} from "./addUpdatePage/AddUpdateTeam"
import {TeamDetails} from "./detailsPage/TeamDetails"
import {SignUp} from "./authorizationPage/SignUp"
import {CardPlayers} from "./cartPage/CardPlayers"
import {PlayerDetails} from "./detailsPage/PlayerDetails"
import {AddUpdatePlayer} from "./addUpdatePage/AddUpdatePlayer"
import {NotFound} from "./NotFound";

export const MainRoutes = {
    SignInPath: {
        link: '/sign_in'
    },
    SignUpPath: {
        link: '/sign_up'
    },
    CardTeamsPath: {
        link: '/card_teams'
    },
    TeamDetailsPath: {
        link: '/team/'
    },
    AddUpdateTeamPath: {
        link: '/add_update_team'
    },
    CardPlayersPath: {
        link: '/card_players'
    },
    PlayerDetailsPath: {
        link: '/player/'
    },
    AddUpdatePlayerPath: {
        link: '/add_update_player'
    },
}

export const routes = [
    {
        path: "/",
        exact: true,
        main: () => <SignIn/>
    },
    {
        path: MainRoutes.SignInPath.link,
        main: () => <SignIn/>
    },
    {
        path: MainRoutes.SignUpPath.link,
        main: () => <SignUp/>
    },
    {
        path: MainRoutes.CardTeamsPath.link,
        main: () => <CardTeams/>
    },
    {
        path: MainRoutes.TeamDetailsPath.link + ':teamID',
        main: () => <TeamDetails/>
    },
    {
        path: MainRoutes.AddUpdateTeamPath.link,
        main: () => <AddUpdateTeam/>
    },
    {
        path: MainRoutes.CardPlayersPath.link,
        main: () => <CardPlayers/>
    },

    {
        path: MainRoutes.PlayerDetailsPath.link + ':playerID',
        main: () => <PlayerDetails/>

    },
    {
        path: MainRoutes.AddUpdatePlayerPath.link,
        main: () => <AddUpdatePlayer/>
    },
    {
        path: "*",
        main: () => <NotFound/>
    }
]
import {SignIn} from "./authorizationPage/SignIn"
import {CardTeams} from "./cartPage/CardTeams"
import {AddUpdateTeam} from "./addUpdatePage/AddUpdateTeam"
import {TeamDetails} from "./detailsPage/TeamDetails"
import {SignUp} from "./authorizationPage/SignUp"
import {CardPlayers} from "./cartPage/CardPlayers"
import {PlayerDetails} from "./detailsPage/PlayerDetails"
import {AddUpdatePlayer} from "./addUpdatePage/AddUpdatePlayer"
import {NotFound} from "./NotFound";

export const SignInPath = '/sign_in'
export const SignUpPath = '/sign_up'
export const CardTeamsPath = '/card_teams'
export const TeamDetailsPath = '/team/'
export const AddUpdateTeamPath = '/add_update_team'
export const CardPlayersPath = '/card_players'
export const PlayerDetailsPath = '/player/'
export const AddUpdatePlayerPath = '/add_update_player'

export const routes = [
    {
        path: "/",
        exact: true,
        main: () => <SignIn/>
    },
    {
        path: SignInPath,
        main: () => <SignIn/>
    },
    {
        path: SignUpPath,
        main: () => <SignUp/>
    },
    {
        path: CardTeamsPath,
        main: () => <CardTeams/>
    },
    {
        path: TeamDetailsPath + ':teamID',
        main: () => <TeamDetails/>
    },
    {
        path: AddUpdateTeamPath,
        main: () => <AddUpdateTeam/>
    },
    {
        path: CardPlayersPath,
        main: () => <CardPlayers/>
    },

    {
        path: PlayerDetailsPath + ':playerID',
        main: () => <PlayerDetails/>

    },
    {
        path: AddUpdatePlayerPath,
        main: () => <AddUpdatePlayer/>
    },
    {
        path: "*",
        main: () => <NotFound/>
    }
]
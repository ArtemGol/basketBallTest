import {AuthInitialStateInterface, AuthInterFace} from "./authTypes";

export const GlobalForAuth = (state: AuthInitialStateInterface, payload: AuthInterFace) => {

    state.isAuth = true
    state.name = payload.name
    state.avatarUrl = payload.avatarUrl
    state.token = payload.token

    localStorage.token = payload.token
    localStorage.isAuth = true
    localStorage.name = payload.name
    localStorage.avatarUrl = payload.avatarUrl
}
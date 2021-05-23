import {AuthInitialStateInterface, IAuth} from "../modules/auth/authTypes";

export const globalForAuthModule = (state: AuthInitialStateInterface, payload: IAuth) => {
  state.isAuth = true
  state.name = payload.name
  state.avatarUrl = payload.avatarUrl
  state.token = payload.token

  localStorage.token = payload.token
  localStorage.isAuth = true
  localStorage.name = payload.name
  localStorage.avatarUrl = payload.avatarUrl
}
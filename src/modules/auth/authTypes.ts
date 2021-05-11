import {IError} from "../globaltypes";

export interface AuthInitialStateInterface {
    error: IError | null
    isFetching: boolean
    isAuth: boolean
    name: string | null
    avatarUrl: string | null
    token: string | null
}

export interface IAuth {
    name: string
    avatarUrl: string
    token: string
}

export interface RootAuthStateInterface {
    auth: AuthInitialStateInterface
}
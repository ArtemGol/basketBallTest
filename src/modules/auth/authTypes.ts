import {ErrorInterface} from "../globaltypes";

export interface AuthInitialStateInterface {
    error?: ErrorInterface | null
    isFetching?: boolean
    isAuth: boolean
    name: string | null
    avatarUrl: string | null
    token: string | null
}

export interface AuthInterFace {
    name: string
    avatarUrl: string
    token: string
}

export interface RootAuthStateInterface {
    auth: AuthInitialStateInterface
}
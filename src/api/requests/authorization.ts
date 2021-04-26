import {loginInstance} from "../baseRequest"

export const authorization = {
    registered: ({userName, login, password}: {
        userName: string
        login: string
        password: string}) => {
        return loginInstance.post('Auth/SignUp', {
            userName,
            login,
            password
        }).then((response) => {
            return response.data;
        })
    },
    login: ({login, password}: {
        login: string
        password: string}) => {
        return loginInstance.post('Auth/SignIn', {
            login,
            password
        }).then((response) => {
            return response.data;
        })
    },
}
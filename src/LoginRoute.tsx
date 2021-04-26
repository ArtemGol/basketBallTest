import React, {FC} from "react"
import {Redirect, Route} from "react-router-dom"
import {useAuthSelector} from "./modules/auth/authSlice"

export const LoginRoute: FC = ({children, ...rest}) => {

    const isAuth = useAuthSelector(state => state.auth.isAuth)

    return <Route
        {...rest}
        render={() => isAuth ? <Redirect to={'/card_teams'}/> : children}
    />
}
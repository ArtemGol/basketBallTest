import React, {FC} from "react"
import {Redirect, Route} from "react-router-dom"
import {useAuthSelector} from "./modules/auth/authSlice"
import {MainRoutes} from "./pages/routes";

export const LoginRoute: FC = ({children, ...rest}) => {

    const isAuth = useAuthSelector(state => state.auth.isAuth)

    return <Route
        {...rest}
        render={() => isAuth ? <Redirect to={MainRoutes.CardTeamsPath.link}/> : children}
    />
}
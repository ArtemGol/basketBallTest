import React, {FC} from 'react'
import {useAuthSelector} from "./modules/auth/authSlice"
import {Redirect, Route} from "react-router-dom"
import {MainRoutes} from "./pages/routes";

export const PrivateRoute: FC = ({children, ...rest}) => {

    const isAuth = useAuthSelector(state => state.auth.isAuth)

    return <Route
        {...rest}
        render={() => isAuth ? children : <Redirect to={MainRoutes.SignInPath.link}/> }
    />

}
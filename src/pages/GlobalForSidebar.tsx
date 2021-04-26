import React, {FC} from 'react'
import {NavLink} from "react-router-dom"
import teams from "../assets/icon/group_person.png"
import players from "../assets/icon/person.png"
import {logout} from "../modules/auth/authSlice"
import {useAppDispatch} from "../core/redux/store";
import {MainRoutes} from "./routes";

export const GlobalForSidebar: FC<{ image: string, mobile?: boolean }> = ({image, mobile}) => {
    const dispatch = useAppDispatch()
    const Logout = () => {
        dispatch(logout())
    }
    return (
        <>
            <NavLink to={MainRoutes.CardTeamsPath.link} activeClassName={'active'}>
                <img src={teams} alt="team"/>
                <nav>Teams</nav>
            </NavLink>
            <NavLink to={MainRoutes.CardPlayersPath.link} activeClassName={'active'}>
                <img src={players} alt="player"/>
                <nav>Players</nav>
            </NavLink>
            <div className={mobile ? 'sign_out_E' : ''} onClick={Logout}>
                {mobile
                    ? <img src={image} alt="sign_out"/>
                    : <img src={image} alt="sign_out" width={'60px'}/>
                }
                {mobile && 'Sign out'}
            </div>
        </>
    )
}
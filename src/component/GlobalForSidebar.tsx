import React from 'react'
import {NavLink} from "react-router-dom"
import teams from "../assets/icon/groupPerson.png"
import players from "../assets/icon/person.png"
import {mainRoutes} from "../pages/routes";

interface IProps {
    image: string
    mobile?: boolean
    Logout: () => void
}

export const GlobalForSidebar = ({image, mobile, Logout}: IProps) => {
    const forLinks = (
        <>
            <NavLink to={mainRoutes.CardTeamsPath} activeClassName={'active'}>
                <img src={teams} alt="team"/>
                <nav>Teams</nav>
            </NavLink>
            <NavLink to={mainRoutes.CardPlayersPath} activeClassName={'active'}>
                <img src={players} alt="player"/>
                <nav>Players</nav>
            </NavLink>
        </>
    )
    const forLogout = (
        <div className={mobile ? 'signOutMobile' : ''} onClick={Logout}>
            {mobile
                ? <img src={image} alt="sign_out"/>
                : <img src={image} alt="sign_out" width={'60px'}/>
            }
            {mobile && 'Sign out'}
        </div>
    )
    return (
        <>
            {mobile
                ? <>
                    {forLinks}
                    {forLogout}
                </>
                : <>
                    <div>
                        {forLinks}
                    </div>
                    {forLogout}
                </>
            }
        </>
    )
}
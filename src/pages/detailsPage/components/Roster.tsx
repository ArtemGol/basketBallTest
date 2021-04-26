import React, {FC} from 'react'
import {RosterStyles} from "../../../styles/forDetails/RosterStyles";
import {NavLink} from "react-router-dom";
import {MainRoutes} from "../../routes";

export const Roster: FC<{
    number: number
    mini: string
    rName: string
    rPosition: string
    rHeight: number
    rWeight: number
    rBirthday: string
    rId: number
}> = ({
          number,
          mini,
          rName,
          rPosition,
          rHeight,
          rWeight,
          rBirthday,
          rId
      }) => {
    const birthdayInSeconds = Date.parse(rBirthday)
    const realTime = Date.now()
    const rAge = Math.round((realTime - birthdayInSeconds) / (1000 * 60 * 60 * 24 * 30 * 12))
    return (
        <RosterStyles>
            <span>{number}</span>
            <span className={'namePhoto'}>
                    <NavLink to={MainRoutes.PlayerDetailsPath.link + rId}>
                        <img width={'50px'} src={mini} alt="mini"/>
                        </NavLink>
                            <div>
                                <div>{rName}</div>
                                <div>{rPosition}</div>
                            </div>
                    </span>
            <div className={'characteristics'}>
                <span>{rHeight} cm</span>
                <span>{rWeight} kg</span>
                <span>{rAge}</span>
            </div>
        </RosterStyles>
    )
}
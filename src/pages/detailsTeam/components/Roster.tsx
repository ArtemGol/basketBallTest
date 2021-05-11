import React, {FC} from 'react'
import {NavLink} from "react-router-dom";
import {mainRoutes} from "../../routes";
import {RosterStyles} from "./RosterLayout";

export const Roster: FC<{
    number: number
    mini: string
    rName: string
    rPosition: string
    rHeight: number
    rWeight: number
    rBirthday: Date
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
    const birthdayInSeconds = Date.parse(String(rBirthday))
    const realTime = Date.now()
    const rAge = Math.round((realTime - birthdayInSeconds) / (1000 * 60 * 60 * 24 * 30 * 12))
    return (
        <RosterStyles>
            <span>{number}</span>
            <span className={'namePhoto'}>
                    <NavLink to={mainRoutes.PlayerDetailsPath + rId}>
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
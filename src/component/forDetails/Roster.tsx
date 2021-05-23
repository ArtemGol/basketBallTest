import React, {FC} from 'react'
import {NavLink} from "react-router-dom";
import {mainRoutes} from "../../pages/routes";
import {RosterCharacteristics, RosterNamePhoto, RosterStyles} from "./RosterLayout";

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
      <RosterNamePhoto>
        <NavLink to={mainRoutes.PlayerDetailsPath + rId}>
          <img width={'50px'} src={`http://dev.trainee.dex-it.ru${mini}`} alt="mini"/>
        </NavLink>
        <div>
          <div>{rName}</div>
          <div>{rPosition}</div>
        </div>
      </RosterNamePhoto>
      <RosterCharacteristics>
        <span>{rHeight} cm</span>
        <span>{rWeight} kg</span>
        <span>{rAge}</span>
      </RosterCharacteristics>
    </RosterStyles>
  )
}
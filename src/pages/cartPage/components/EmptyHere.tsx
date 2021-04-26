import React, {FC} from 'react'
import emptyForTeam from '../../../assets/images/emptyForTeam.png'
import emptyForPlayer from '../../../assets/images/emptyForPlayer.png'
import {EmptyHereNotFoundStyles} from "../../../styles/EmptyHereNotFoundStyles"

export const EmptyHere: FC<{team?: boolean}> = ({team}) => {
    return (
        <EmptyHereNotFoundStyles team={team}>
            <img src={team ? emptyForTeam : emptyForPlayer} alt="emptyHere"/>
            <span className={'firstSpan'}>
                Empty here
            </span>
            <span className={'secondSpan'}>
                Add new {team ? 'teams' : 'players'} to continue
            </span>
        </EmptyHereNotFoundStyles>
    )
}
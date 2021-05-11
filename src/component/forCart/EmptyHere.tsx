import React from 'react'
import emptyForTeam from '../../assets/images/emptyForTeam.png'
import emptyForPlayer from '../../assets/images/emptyForPlayer.png'
import { NotFoundEmptyHereStyles } from '../NotFound'

interface IProps {
    team?: boolean
}

export const EmptyHere = ({team}: IProps) => (
        <NotFoundEmptyHereStyles team={team}>
            <img src={team ? emptyForTeam : emptyForPlayer} alt="emptyHere"/>
            <span className={'title'}>
                Empty here
            </span>
            <span className={'text'}>
                Add new {team ? 'teams' : 'players'} to continue
            </span>
        </NotFoundEmptyHereStyles>
    )
import React, {useEffect} from 'react'
import {HeadBlockDetails} from "../../component/forDetails/HeadBlockDetails"
import {DataLabelDetails} from "../../component/forDetails/DataLabelDetails"
import {useHistory, useParams} from "react-router"
import {setTeamToUpdate, useTeamSelector} from "../../modules/team/teamSlice"
import {deleteTeamThunkCreator, getTeamThunkCreator} from "../../modules/team/teamThunk"
import {usePlayerSelector} from "../../modules/player/playerSlice";
import {getPlayersThunkCreator} from "../../modules/player/playerThunk";
import {mainRoutes} from "../routes";
import {clearImageSource} from "../../modules/image/imageSlice";
import {unwrapResult} from "@reduxjs/toolkit";
import {DetailsLayout} from "../../component/forDetails/DetailsLayout";
import {useDispatch} from "react-redux";

export const DetailsTeam = () => {
    const {teamID}: any = useParams()
    const dispatch: any = useDispatch()
    const history = useHistory()
    const {players, playerCount} = usePlayerSelector(state => state.player)
    useEffect(() => {
        dispatch(getPlayersThunkCreator({playerName: '', currentPage: 1, pageSize: playerCount}))
        dispatch(getTeamThunkCreator({id: teamID}))
        //eslint-disable-next-line
    }, [])

    const {team, initialized} = useTeamSelector(state => state.team)
    const {name, foundationYear, division, conference, imageUrl, id}: any = team || ''
    const obj = {foundationYear, division, conference}

    const goToUpdateTeam = () => {
        history.push(mainRoutes.AddUpdateTeamPath)
        dispatch(setTeamToUpdate())
        dispatch(clearImageSource())
    }
    const deleteTeam = async () => {
        await dispatch(deleteTeamThunkCreator({id})).then(unwrapResult)
        history.push(mainRoutes.CardTeamsPath)
    }

    return (
        <DetailsLayout player={false}
                       id={id}
                       players={players}
                       initialized={initialized}>
            <HeadBlockDetails name={name}
                              goToUpdateItem={goToUpdateTeam}
                              deleteItem={deleteTeam}/>
            <DataLabelDetails name={name}
                              obj={obj}
                              image={imageUrl}/>
        </DetailsLayout>
    )
}
import React, {useEffect} from 'react'
import {HeadBlockDetails} from "../../component/forDetails/HeadBlockDetails"
import {DataLabelDetails} from "../../component/forDetails/DataLabelDetails"
import {useHistory, useParams} from "react-router"
import {deletePlayerThunkCreator, getPlayerThunkCreator} from "../../modules/player/playerThunk"
import {setPlayerToUpdate, usePlayerSelector} from "../../modules/player/playerSlice"
import {mainRoutes} from "../routes";
import {clearImageSource} from "../../modules/image/imageSlice";
import {unwrapResult} from "@reduxjs/toolkit";
import {DetailsLayout} from "../../component/forDetails/DetailsLayout";
import {useDispatch} from "react-redux";

export const DetailsPlayer = () => {
  const {playerID}: any = useParams()
  const dispatch: any = useDispatch()
  const history = useHistory()
  useEffect(() => {
    dispatch(getPlayerThunkCreator({id: playerID}))
    //eslint-disable-next-line
  }, [])

  const {player, initialized} = usePlayerSelector(state => state.player)
  const {avatarUrl, birthday, height, id, name, number, position, teamName, weight}: any = player || ''
  const birthdayInSeconds = Date.parse(birthday)
  const realTime = Date.now()
  const obj = {
    position,
    team: teamName,
    height,
    weight,
    age: Math.round((realTime - birthdayInSeconds) / (1000 * 60 * 60 * 24 * 30 * 12))
  }

  const goToUpdatePlayer = () => {
    history.push(mainRoutes.AddUpdatePlayerPath)
    dispatch(setPlayerToUpdate())
    dispatch(clearImageSource())
  }

  const deletePlayer = async () => {
    await dispatch(deletePlayerThunkCreator({id})).then(unwrapResult)
    history.push(mainRoutes.CardPlayersPath)
  }

  return (
    <DetailsLayout player={true}
                   id={id}
                   initialized={initialized}>
      <HeadBlockDetails player
                        name={name}
                        goToUpdateItem={goToUpdatePlayer}
                        deleteItem={deletePlayer}/>
      <DataLabelDetails player
                        name={name}
                        number={number}
                        obj={obj}
                        image={avatarUrl}/>
    </DetailsLayout>
  )
}
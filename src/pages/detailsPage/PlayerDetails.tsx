import React, {useEffect} from 'react'
import {WithHeaderSideBarLayout} from "../WithHeaderSideBarLayout"
import {DetailsItemsStyles} from "../../styles/forDetails/DetailsStyle"
import {HeadBlockDetails} from "./components/HeadBlockDetails"
import {DataLabelDetails} from "./components/DataLabelDetails"
import {useParams} from "react-router"
import {getPlayerThunkCreator} from "../../modules/player/playerThunk"
import {usePlayerSelector} from "../../modules/player/playerSlice"
import {Preloader} from "../helpers/preloader/Preloader";
import {NotFound} from "../NotFound";
import {useAppDispatch} from "../../core/redux/store";

export const PlayerDetails = () => {
  const {playerID}: any = useParams()
  const dispatch: any = useAppDispatch()
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
  return (
    <WithHeaderSideBarLayout details>
      {!initialized
        ? id
          ? <DetailsItemsStyles>
            <HeadBlockDetails player name={name} id={id}/>
            <DataLabelDetails player name={name} number={number} obj={obj} image={avatarUrl}/>
          </DetailsItemsStyles>
          : <NotFound/>
        : <Preloader details/>
      }
    </WithHeaderSideBarLayout>
  )
}
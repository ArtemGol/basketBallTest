import React, {FC} from 'react'
import {NavLink} from "react-router-dom"
import edit from "../../../assets/icon/create.png"
import Delete from "../../../assets/icon/delete.png"
import {HeadBlockDetailsStyles} from "../../../styles/forDetails/DetailsStyle"
import {useHistory} from "react-router"
import {setTeamToUpdate} from "../../../modules/team/teamSlice"
import {deleteTeamThunkCreator} from "../../../modules/team/teamThunk"
import {clearImageSource} from "../../../modules/image/imageSlice"
import {setPlayerToUpdate} from "../../../modules/player/playerSlice"
import {deletePlayerThunkCreator} from "../../../modules/player/playerThunk"
import {unwrapResult} from "@reduxjs/toolkit";
import {useAppDispatch} from "../../../core/redux/store";
import {MainRoutes} from "../../routes";

export const HeadBlockDetails: FC<{
  player?: boolean
  name: string
  id: number
}> = ({player, name, id}) => {
  const history = useHistory()
  const dispatch: any = useAppDispatch()
  const goToUpdateItem = () => {
    history.push(player ? MainRoutes.AddUpdatePlayerPath.link : MainRoutes.AddUpdateTeamPath.link)
    if (player) {
      dispatch(setPlayerToUpdate())
    } else {
      dispatch(setTeamToUpdate())
    }
    dispatch(clearImageSource())
  }
  const deleteItem = async () => {
    if (player) {
      await dispatch(deletePlayerThunkCreator({id})).then(unwrapResult)
    } else {
      await dispatch(deleteTeamThunkCreator({id})).then(unwrapResult)
    }
    history.push(player ? MainRoutes.CardPlayersPath.link : MainRoutes.CardTeamsPath.link)
  }
  return (
    <HeadBlockDetailsStyles>
      <div className={'headDetailsPath'}>
        <NavLink to={player ? MainRoutes.CardPlayersPath.link : MainRoutes.CardTeamsPath.link}>
          {player ? 'Players' : 'Teams'}
        </NavLink>&ensp;/&ensp;
        <NavLink to={'##'}>
          {name}
        </NavLink>
      </div>
      <div>
        <img src={edit} alt="create" onClick={goToUpdateItem}/>
        <img src={Delete} alt="delete" onClick={deleteItem}/>
      </div>
    </HeadBlockDetailsStyles>
  )
}
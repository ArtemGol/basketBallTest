import { createAsyncThunk } from "@reduxjs/toolkit";
import { player } from "../../api/requests/player";
import {SaveImageThunkCreator} from "../image/imageThunk";

export interface FormPlayerInterFace {
    name: string
    number: number
    position: string
    team: number
    birthday: string
    height: number
    weight: number
    avatarUrl: string | FormData
    id?: number
    avatarUrlString?: string

}

export const getPlayersThunkCreator = createAsyncThunk<string, {
    playerName: string
    TeamIds?: { value?: string, label?: string }[]
    currentPage: number
    pageSize: number
}>(
  "player/getPlayers",
  ({ playerName, TeamIds, currentPage, pageSize }) => {
    return player.getPlayers(playerName, TeamIds, currentPage, pageSize);
  }
);

export const getPlayerThunkCreator = createAsyncThunk<string, {
    id: number
}>(
  "player/getPlayer",
  ({ id }) => {
    return player.getPlayer(id);
  }
);

export const addPlayerThunkCreator = createAsyncThunk<string, FormPlayerInterFace, {
    dispatch: any
    getState: any
}>(
  "player/addPlayer",
  async ({
    name,
    number,
    position,
    team,
    birthday,
    height,
    weight,
    avatarUrl,
  }, {dispatch, getState}): Promise<any> => {
      // @ts-ignore
      await dispatch(SaveImageThunkCreator(avatarUrl))
      return player.addPlayer({
        name,
        number,
        position,
        team,
        birthday,
        height,
        weight,
          // @ts-ignore
        avatarUrl: getState().image.imageUrl,
      });
  }
);

export const updatePlayerThunkCreator = createAsyncThunk<string, FormPlayerInterFace, {
    dispatch: any,
    getState: any
}>(
  "player/updatePlayer",
  async ({
    name,
    number,
    position,
    team,
    birthday,
    height,
    weight,
    avatarUrl,
    avatarUrlString,
    id,
  }, {dispatch, getState}): Promise<any> => {
      avatarUrl && await dispatch(SaveImageThunkCreator(avatarUrl));

      return player.updatePlayer({
      name,
      number,
      position,
      team,
      birthday,
      height,
      weight,
      avatarUrl: avatarUrl
          // @ts-ignore
        ? getState().image.imageUrl
        : avatarUrlString,
      id,
    });
  }
);

export const deletePlayerThunkCreator = createAsyncThunk<string, {
    id: number
}>(
  "player/deletePlayer",
  ({ id }): Promise<any> => {
    return player.deletePlayer(id);
  }
);

export const getPositionsThunkCreator = createAsyncThunk<string>(
  "player/getPosition",
  () => {
    return player.getPositions();
  }
);

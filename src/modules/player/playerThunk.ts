import {createAsyncThunk} from "@reduxjs/toolkit";
import {player} from "../../api/requests/player";
import {SaveImageThunkCreator} from "../image/imageThunk";
import {IPlayer} from "./playerTypes";
import {IAddPlayerRequest, IGetPlayersRequest, IPage, IUpdatePlayerRequest} from "../../api/dto/IPlayer";

export const getPlayersThunkCreator = createAsyncThunk<IPage<IPlayer>, IGetPlayersRequest>(
  "player/getPlayers",
  ({
     playerName,
     TeamIds,
     currentPage,
     pageSize
   }) => {
    return player.getPlayers(playerName, TeamIds, currentPage, pageSize);
  }
);

export const getPlayerThunkCreator = createAsyncThunk<IPlayer, {
  id: number
}>(
  "player/getPlayer",
  ({id}) => {
    return player.getPlayer(id);
  }
);

export const addPlayerThunkCreator = createAsyncThunk<IPlayer, IAddPlayerRequest>(
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
         }, {dispatch, getState}: { dispatch: any, getState: any }) => {
    await dispatch(SaveImageThunkCreator(avatarUrl))
    return player.addPlayer({
      name,
      number,
      position,
      team,
      birthday,
      height,
      weight,
      avatarUrl: getState().image.imageUrl,
    });
  }
);

export const updatePlayerThunkCreator = createAsyncThunk<IPlayer, IUpdatePlayerRequest>(
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
         }, {dispatch, getState}: { dispatch: any, getState: any }) => {
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
        ? getState().image.imageUrl
        : avatarUrlString,
      id,
    });
  }
);

export const deletePlayerThunkCreator = createAsyncThunk<IPlayer, { id: number }>(
  "player/deletePlayer",
  ({id}) => {
    return player.deletePlayer(id);
  }
);

export const getPositionsThunkCreator = createAsyncThunk<string>(
  "player/getPosition",
  () => {
    return player.getPositions();
  }
);

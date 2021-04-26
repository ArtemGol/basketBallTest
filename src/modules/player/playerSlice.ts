import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {
  addPlayerThunkCreator,
  deletePlayerThunkCreator,
  getPlayersThunkCreator,
  getPlayerThunkCreator,
  getPositionsThunkCreator,
  updatePlayerThunkCreator,
} from "./playerThunk";
import {CustomAlertFunction} from "../../utils/CustomAlertFunction";
import {PlayerInitialStateInterface, PlayerInterFace, PlayersInterFace, RootPlayerStateInterface} from "./playerTypes";

const initialState: PlayerInitialStateInterface = {
  initialized: false,
  error: null,
  select: [],
  search: "",
  positions: [],
  updatePlayer: null,
  player: null,
  players: [],
  playerCount: 0,
  currentPage: 1,
  pageSize: 6,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setPlayerToUpdate: (state) => {
      state.updatePlayer = state.player;
    },
    setPlayerToAdd: (state) => {
      state.updatePlayer = null;
    },
    setPlayerSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    },
    setPlayerSelect: (state, { payload }: PayloadAction<{ value?: string, label?: string }[]>) => {
      state.select = payload;
    }
  },
  extraReducers: {
    [getPlayersThunkCreator.fulfilled.type]: (state, { payload }: PayloadAction<PlayersInterFace>) => {
      state.players = payload.data;
      state.playerCount = payload.count;
      state.currentPage = payload.page;
      state.pageSize = payload.size;
      state.initialized = false
    },
    [getPlayersThunkCreator.pending.type]: (state) => {
      state.initialized = true
    },
    [getPlayersThunkCreator.rejected.type]: (state, action: any) => {
      CustomAlertFunction(
        action ? action.error?.message : 'Network Error',
        '',
        false,
        false
      )
    },
    [getPlayerThunkCreator.pending.type]: (state) => {
      state.initialized = true
    },
    [getPlayerThunkCreator.fulfilled.type]: (state, { payload }: PayloadAction<PlayerInterFace>) => {
      state.player = payload;
      state.initialized = false
    },
    [getPlayerThunkCreator.rejected.type]: (state, action: any) => {
      CustomAlertFunction(
        action ? action.error?.message : 'Network Error',
        '',
        false,
        false
      )
    },
    [addPlayerThunkCreator.pending.type]: (state) => {
      state.initialized = true
    },
    [addPlayerThunkCreator.fulfilled.type]: (state) => {
      state.initialized = false
      CustomAlertFunction(
        '',
        'Player was added',
        false,
        false
      )
    },
    [addPlayerThunkCreator.rejected.type]: (state, action) => {
      CustomAlertFunction(
        action ? action.error?.message : 'Network Error',
        '',
        false,
        false
      )
      state.initialized = false
    },
    [updatePlayerThunkCreator.pending.type]: (state) => {
      state.initialized = true
    },
    [updatePlayerThunkCreator.fulfilled.type]: (state) => {
      state.initialized = false
      CustomAlertFunction(
        '',
        'Player was updated',
        false,
        false
      )
    },
    [updatePlayerThunkCreator.rejected.type]: (state, action) => {
      CustomAlertFunction(
        action ? action.error?.message : 'Network Error',
        '',
        false,
        false
      )
      state.initialized = false
    },
    [deletePlayerThunkCreator.fulfilled.type]: () => {
      CustomAlertFunction(
        '',
        'Player was deleted',
        false,
        false
      )
    },
    [deletePlayerThunkCreator.rejected.type]: (state, action) => {
      CustomAlertFunction(
        action ? action.error?.message : 'Network Error',
        '',
        false,
        false
      )
    },
    [getPositionsThunkCreator.fulfilled.type]: (state, {payload}: PayloadAction<string[]>) => {
      state.positions = payload;
    },
    [getPositionsThunkCreator.rejected.type]: (state, action: any) => {
      CustomAlertFunction(
        action ? action.error?.message : 'Network Error',
        '',
        false,
        false
      )
    },
  },
});

export const {
  setPlayerToUpdate,
  setPlayerToAdd,
  setPlayerSearch,
  setPlayerSelect
} = playerSlice.actions;

export const usePlayerSelector: TypedUseSelectorHook<RootPlayerStateInterface> = useSelector;

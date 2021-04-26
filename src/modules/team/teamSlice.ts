import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import {
  addTeamThunkCreator,
  deleteTeamThunkCreator,
  getTeamsThunkCreator,
  getTeamThunkCreator,
  updateTeamThunkCreator,
} from "./teamThunk";
import {RootTeamStateInterface, TeamInitialStateInterface, TeamInterface, TeamsInterface} from "./teamTypes";
import {CustomAlertFunction} from "../../utils/CustomAlertFunction";

const initialState: TeamInitialStateInterface = {
  error: null,
  initialized: false,
  search: "",
  updateTeam: null,
  team: null,
  teams: [],
  teamCount: 0,
  currentPage: 1,
  pageSize: 6
};

export const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setTeamToUpdate: (state) => {
      state.updateTeam = state.team;
    },
    setTeamToAdd: (state) => {
      state.updateTeam = null;
    },
    setTeamSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload;
    }
  },
  extraReducers: {
    [getTeamsThunkCreator.pending.type]: (state) => {
      state.initialized = true
    },
    [getTeamsThunkCreator.fulfilled.type]: (state, { payload }: PayloadAction<TeamsInterface>) => {
      state.initialized = false
      state.teams = payload.data;
      state.teamCount = payload.count;
      state.currentPage = payload.page;
      state.pageSize = payload.size;
    },
    [getTeamsThunkCreator.rejected.type]: (state, action) => {
      CustomAlertFunction(
          action ? action.error?.message : 'Network Error',
          '',
          false,
          false
      )
    },
    [getTeamThunkCreator.pending.type]: (state) => {
      state.initialized = true
    },
    [getTeamThunkCreator.fulfilled.type]: (state, { payload }: PayloadAction<TeamInterface>) => {
      state.initialized = false
      state.team = payload
    },
    [getTeamThunkCreator.rejected.type]: (state, action) => {
      CustomAlertFunction(
          action ? action.error?.message : 'Network Error',
          '',
          false,
          false
      )
    },
    [addTeamThunkCreator.pending.type]: (state) => {
      state.initialized = true
    },
    [addTeamThunkCreator.fulfilled.type]: (state) => {
      state.initialized = false
      CustomAlertFunction(
          '',
          'Team was added',
          false,
          false
      )
    },
    [addTeamThunkCreator.rejected.type]: (state, action) => {
      CustomAlertFunction(
          action ? action.error?.message : 'Network Error',
          '',
          false,
          true
      )
      state.initialized = false
    },
    [updateTeamThunkCreator.pending.type]: (state) => {
      state.initialized = true
    },
    [updateTeamThunkCreator.fulfilled.type]: (state) => {
      state.initialized = false
      CustomAlertFunction(
          '',
          'Team was updated',
          false,
          false
      )
    },
    [updateTeamThunkCreator.rejected.type]: (state, action) => {
      CustomAlertFunction(
          action ? action.error?.message : 'Network Error',
          '',
          false,
          true
      )
      state.initialized = false
    },
    [deleteTeamThunkCreator.fulfilled.type]: () => {
      CustomAlertFunction(
          '',
          'Team was deleted',
          false,
          false
      )
    },
    [deleteTeamThunkCreator.rejected.type]: (state, action) => {
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
  setTeamToUpdate,
  setTeamToAdd,
  setTeamSearch
} = teamSlice.actions;

export const useTeamSelector: TypedUseSelectorHook<RootTeamStateInterface> = useSelector;

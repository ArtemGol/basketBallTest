import {createAsyncThunk} from "@reduxjs/toolkit";
import {team} from "../../api/requests/team";
import {SaveImageThunkCreator} from "../image/imageThunk";
import {ITeam} from "./teamTypes";
import {IPage} from "../../api/dto/IPlayer";
import {IAddTeamRequest, IGetTeamsRequest, IUpdateTeamRequest} from "../../api/dto/ITeam";

export const getTeamsThunkCreator = createAsyncThunk<IPage<ITeam[]>, IGetTeamsRequest>(
  "team/getTeams",
  ({teamName, currentPage, pageSize}) => {
    return team.getTeams(teamName, currentPage, pageSize);
  }
);

export const getTeamThunkCreator = createAsyncThunk<ITeam, { id: number }>(
  "team/getTeam",
  ({id}) => {
    return team.getTeam(id);
  }
);

export const addTeamThunkCreator = createAsyncThunk<ITeam, IAddTeamRequest>(
  "team/addTeam",
  async (
    {name, foundationYear, division, conference, imageUrl},
    {dispatch, getState}: { dispatch: any, getState: any }
  ) => {
    await dispatch(SaveImageThunkCreator(imageUrl))
    return team.addTeam({
      name,
      foundationYear,
      division,
      conference,
      imageUrl: getState().image.imageUrl,
    });
  }
);

export const updateTeamThunkCreator = createAsyncThunk<ITeam, IUpdateTeamRequest>(
  "team/updateTeam",
  async ({
           name,
           foundationYear,
           division,
           conference,
           imageUrl,
           imageUrlString,
           id,
         }, {dispatch, getState}: { dispatch: any, getState: any }) => {
    imageUrl && await dispatch(SaveImageThunkCreator(imageUrl));
    return team.updateTeam({
      name,
      foundationYear,
      division,
      conference,
      imageUrl: imageUrl
        ? getState().image.imageUrl
        : imageUrlString,
      id,
    });
  }
);

export const deleteTeamThunkCreator = createAsyncThunk<ITeam, { id: number }>(
  "team/deleteTeam",
  ({id}): Promise<any> => {
    return team.deleteTeam(id);
  }
);

import {createAsyncThunk} from "@reduxjs/toolkit";
import {team} from "../../api/requests/team";
import {SaveImageThunkCreator} from "../image/imageThunk";

export interface FormTeamInterFace {
    name: string
    foundationYear: number
    division: string
    conference: string
    imageUrl: string | FormData
    imageUrlString?: string
    id?: number
}

export const getTeamsThunkCreator = createAsyncThunk<string, {
    teamName: string,
    currentPage: number,
    pageSize: number
}>(
    "team/getTeams",
    ({teamName, currentPage, pageSize}) => {
        return team.getTeams(teamName, currentPage, pageSize);
    }
);

export const getTeamThunkCreator = createAsyncThunk<string, {id: number}>(
    "team/getTeam",
    ({id}) => {
        return team.getTeam(id);
    }
);

export const addTeamThunkCreator = createAsyncThunk<string,
    FormTeamInterFace,
    {
        dispatch: any
        getState: any
    }
    >(
    "team/addTeam",
    async (
        {name, foundationYear, division, conference, imageUrl},
        {
            dispatch,
            getState
        }
    ): Promise<any> => {

        await dispatch(SaveImageThunkCreator(imageUrl))

        return team.addTeam({
            name,
            foundationYear,
            division,
            conference,
            // @ts-ignore
            imageUrl: getState().image.imageUrl,
        });
    }
);


export const updateTeamThunkCreator = createAsyncThunk<string,
    FormTeamInterFace,
    {
        dispatch: any
        getState: any
    }>(
    "team/updateTeam",
    async ({
               name,
               foundationYear,
               division,
               conference,
               imageUrl,
               imageUrlString,
               id,
           }, {dispatch, getState}): Promise<any> => {
        imageUrl && await dispatch(SaveImageThunkCreator(imageUrl));
        return team.updateTeam({
            name,
            foundationYear,
            division,
            conference,
            imageUrl: imageUrl
                // @ts-ignore
                ? getState().image.imageUrl
                : imageUrlString,
            id,
        });
    }
);

export const deleteTeamThunkCreator = createAsyncThunk<string, {id: number}>(
    "team/deleteTeam",
    ({id}): Promise<any> => {
        return team.deleteTeam(id);
    }
);

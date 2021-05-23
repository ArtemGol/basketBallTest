import {loginInstance} from "../baseRequest"
import {ITeam} from "../../modules/team/teamTypes";
import {IPage} from "../dto/IPlayer";
import {IAddTeamRequest, IUpdateTeamRequest} from "../dto/ITeam";

export const team = {
  getTeams: (teamName = '', currentPage: number, pageSize = 6): Promise<IPage<ITeam[]>> => {
    return loginInstance.get(`/Team/GetTeams?Name=${teamName}&Page=${currentPage}&PageSize=${pageSize}`, {
      headers: {
        Authorization: `Bearer ` + localStorage.token
      },
    })
      .then((response) => {
        return response.data
      })
  },
  getTeam: (id: number): Promise<ITeam> => {
    return loginInstance.get(`/Team/Get?id=${id}`, {
      headers: {
        Authorization: `Bearer ` + localStorage.token
      },
    })
      .then((response) => {
        return response.data
      })
  },
  addTeam: ({name, foundationYear, division, conference, imageUrl}: IAddTeamRequest): Promise<ITeam> => {
    return loginInstance.post('/Team/Add', {
      name, foundationYear, division, conference, imageUrl
    }, {
      headers: {
        Authorization: `Bearer ` + localStorage.token
      },
    })
  },
  updateTeam: ({name, foundationYear, division, conference, imageUrl, id}: IUpdateTeamRequest): Promise<ITeam> => {
    return loginInstance.put('/Team/Update', {
      name, foundationYear, division, conference, imageUrl, id
    }, {
      headers: {
        Authorization: `Bearer ` + localStorage.token
      },
    })
  },
  deleteTeam: (id: number) => {
    return loginInstance.delete(`/Team/Delete?id=${id}`, {
      headers: {
        Authorization: `Bearer ` + localStorage.token
      },
    })
  }
}
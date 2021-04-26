import {loginInstance} from "../baseRequest"
import {FormPlayerInterFace} from "../../modules/player/playerThunk";

export const player = {
  getPlayers: (playerName = '', TeamIds?: { value?: string, label?: string }[], currentPage = 1, pageSize = 6) => {
    const TeamIDs = TeamIds && TeamIds.map(teamId => `TeamIds=${teamId}`).join('&')
    return loginInstance.get(`/Player/GetPlayers?Name=${playerName}&${TeamIDs}&Page=${currentPage}&PageSize=${pageSize}`,
      {
        headers: {
          Authorization: `Bearer ` + localStorage.token
        },
      })
      .then((response) => {
        return response.data;
      })
  },
  getPlayer: (id: number) => {
    return loginInstance.get(`/Player/Get?id=${id}`,
      {
        headers: {
          Authorization: `Bearer ` + localStorage.token
        },
      })
      .then((response) => {
        return response.data
      })
  },
  addPlayer: ({name, number, position, team, birthday, height, weight, avatarUrl}: FormPlayerInterFace) => {
    return loginInstance.post('/Player/Add',
        {name, number, position, team, birthday, height, weight, avatarUrl}, {
        headers: {
          Authorization: `Bearer ` + localStorage.token
        },
      })
      .then((response) => {
        return response.data;
      })
  },
  updatePlayer: ({name, number, position, team, birthday, height, weight, avatarUrl, id}: FormPlayerInterFace) => {
    return loginInstance.put('/Player/Update', {
      name, number, position, team, birthday, height, weight, avatarUrl, id
    }, {
      headers: {
        Authorization: `Bearer ` + localStorage.token
      },
    })
  },
  deletePlayer: (id: number) => {
    return loginInstance.delete(`/Player/Delete?id=${id}`, {
      headers: {
        Authorization: `Bearer ` + localStorage.token
      },
    })
  },
  getPositions: () => {
    return loginInstance.get('/Player/GetPositions', {
      headers: {
        Authorization: `Bearer ` + localStorage.token
      },
    })
      .then((response) => {
        return response.data;
      })
  }

}
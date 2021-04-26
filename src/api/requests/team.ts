import {loginInstance} from "../baseRequest"
import {FormTeamInterFace} from "../../modules/team/teamThunk";

export const team = {
    getTeams: (teamName = '', currentPage: number, pageSize = 6) => {
        return loginInstance.get(`/Team/GetTeams?Name=${teamName}&Page=${currentPage}&PageSize=${pageSize}`, {
            headers: {
                Authorization: `Bearer ` + localStorage.token
            },
        })
            .then((response) => {
            return response.data
        })
    },
    getTeam: (id: number) => {
        return loginInstance.get(`/Team/Get?id=${id}`, {
            headers: {
                Authorization: `Bearer ` + localStorage.token
            },
        })
            .then((response) => {
            return response.data
        })
    },
    addTeam: ({name, foundationYear, division, conference, imageUrl}: FormTeamInterFace) => {
        return loginInstance.post('/Team/Add', {
            name, foundationYear, division, conference, imageUrl
        }, {
            headers: {
                Authorization: `Bearer ` + localStorage.token
            },
        })
    },
    updateTeam: ({name, foundationYear, division, conference, imageUrl, id}: FormTeamInterFace) => {
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
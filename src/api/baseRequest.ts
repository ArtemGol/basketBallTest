import axios from "axios"

export const loginInstance = axios.create({
    baseURL: 'http://dev.trainee.dex-it.ru/api/'
})
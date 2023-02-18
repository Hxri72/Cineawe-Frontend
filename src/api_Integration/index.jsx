import axios from 'axios'

export const axiosInstanceAdmin = axios.create({
    baseURL : 'http://localhost:5000/api/admin'
})
import axios from 'axios'

export const axiosInstanceAdmin = axios.create({
    baseURL : 'http://localhost:5000/api/admin'
})

export const axiosInstanceUser = axios.create({
    baseURL : 'http://localhost:5000/api/users'
})

export const axiosInstanceOwner = axios.create({
    baseURL : 'http://localhost:5000/api/owner'
})
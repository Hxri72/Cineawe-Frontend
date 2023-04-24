import axios from 'axios'

export const axiosInstanceAdmin = axios.create({
    baseURL : 'https://localhost:5000/api/admin'
})

export const axiosInstanceUser = axios.create({
    baseURL : 'https://localhost:5000/api/users'
})

export const axiosInstanceOwner = axios.create({
    baseURL : 'https://localhost:5000/api/owner'
})

export const axiosInstanceMovie = axios.create({
    baseURL : 'https://api.themoviedb.org/3'    
})
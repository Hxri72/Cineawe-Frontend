import axios from 'axios'

export const axiosInstanceAdmin = axios.create({
    baseURL : 'http://cineawe.online/api/admin'
})

export const axiosInstanceUser = axios.create({
    baseURL : 'http://cineawe.online/api/users'
})

export const axiosInstanceOwner = axios.create({
    baseURL : 'http://cineawe.online/api/owner'
})

export const axiosInstanceMovie = axios.create({
    baseURL : 'https://api.themoviedb.org/3'    
})
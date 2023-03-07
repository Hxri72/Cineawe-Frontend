import { axiosInstanceOwner } from "../axiosInstance";

export const signupOwner = async(payload) => {
    try {
        const response = await axiosInstanceOwner.post('/ownersignup',(payload))
        return response.data;
    } catch (error) {
        return error.response
    }
}

export const loginOwner = async(payload) => {
    try {
        const response = await axiosInstanceOwner.post('/owner',(payload))
        return response.data
    } catch (error) {
        return error.response
    }
}

export const addTheater = async(payload) => {
    try {
        const response = await axiosInstanceOwner.post('/add-theater',(payload))
        return response.data
    } catch (error) {
        return error.response
    }
}

export const getTheaters = async() => {
    try {
        const response = await axiosInstanceOwner.get('/get-theaters')
        return response.data
    } catch (error) {
        return error.response
    }
}
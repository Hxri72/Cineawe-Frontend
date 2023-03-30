import { axiosInstanceOwner } from "../axiosInstance";

export const getCurrentOwner = async(payload) => {
    try {
        const response = await axiosInstanceOwner.post('/getCurrentOwner',(payload))
        return response.data
    } catch (error) {
        return error.response
    }
}

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

export const getTheaters = async(payload) => {
    try {
        const response = await axiosInstanceOwner.post('/get-theaters',(payload))
        return response.data
    } catch (error) {
        return error.response
    }
}

export const postShowData = async(payload) => {
    try {
        const response = await axiosInstanceOwner.post('/add-shows',(payload))
        return response.data
    } catch (error) {
        return error.response
    }
}

export const getShowDetails = async(payload) => {
    try {
        const response = await axiosInstanceOwner.post('/get-show-details',(payload))
        return response.data
    } catch (error) {
        return error.response
    }
}

export const deleteShow = async(payload) => {
    try {
        const response = await axiosInstanceOwner.post('/delete-show-details',(payload))
        return response.data
    } catch (error) {
        return error.response
    }
}

export const editTheater = async(payload) => {
    try {
        const response = await axiosInstanceOwner.post('/edit-theater-details',(payload))
        return response.data
    } catch (error) {
        return error.response
    }
}

export const fetchTheaterDetails = async(payload) => {
    try {
        const response = await axiosInstanceOwner.post('/get-theater-details',(payload))
        return response.data
    } catch (error) {
        return error.response
    }
}

export const deleteTheater = async (payload) => {
    try {
        const response = await axiosInstanceOwner.post('/delete-theater',(payload))
        return response.data
    } catch (error) {
        return error.response
    }
}




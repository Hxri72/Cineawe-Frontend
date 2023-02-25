import { axiosInstanceAdmin } from '../axiosInstance'

export const createAdmin = async (payload) => {
    try {
        const response = await axiosInstanceAdmin.post("/admincreate",(payload))
        return response.data;
    } catch (error) {
        return error.response
    }
}

export const postAdminHome = async (payload) => {
    try {
        const response = await axiosInstanceAdmin.post("/adminlogin",(payload))
        return response.data
    } catch (error) {
        return error.response
    }
}

export const getAllUsers = async () => {
    try {
        const response = await axiosInstanceAdmin.get("/adminuser")
        return response.data
    } catch (error) {
        return error.response
    }
}

export const getAllOwners = async () => {
    try {
        const response = await axiosInstanceAdmin.get("/adminowner")
        return response.data
    } catch (error) {
        return error.response
    }
}
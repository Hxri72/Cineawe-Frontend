import { axiosInstanceAdmin } from '../index'
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
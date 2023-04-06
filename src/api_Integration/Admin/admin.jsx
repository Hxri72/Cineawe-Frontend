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

export const userExist = async (payload) => {
    try {
        const response = await axiosInstanceAdmin.post("/block-user",(payload))
        return response.data
    } catch (error) {
        return error.response
    }
}

//User unblock
export const unblockUser = async(payload)=>{
    try {
        const response = await axiosInstanceAdmin.post("/unblock-user",(payload))
        return response.data
    } catch (error) {
        return error.response
    }
}

//ownerStatus Changing
export const ownerStatusChange = async(payload)=>{
    try {
        const response = await axiosInstanceAdmin.post('/owner-status-change',(payload))
        return response.data;
    } catch (error) {
        return error.response;
    }
}

export const getTheaters = async() => {
    try {
        const response = await axiosInstanceAdmin.get('/get-theaters')
        return response.data
    } catch (error) {
        return error.response
    }
}

export const getAllBookings = async() => {
    try {
        const response = await axiosInstanceAdmin.get('/getAllBooking')
        return response.data
    } catch (error) {
        return error.response
    }
}

export const addMovieDetails = async(payload) => {
    try {
        const response = await axiosInstanceAdmin.post('/add-movies',(payload))
        return response.data
    } catch (error) {
        return error.response
    }
}

export const getMovies = async() => {
    try {
        const response = await axiosInstanceAdmin.get('/get-movies')
        return response.data
    } catch (error) {
        return error.response
    }
}

export const deleteMovie = async (payload) => {
    try {
        const response = await axiosInstanceAdmin.post('/delete-movie',(payload))
        return response.data
    } catch (error) {
        return error.response
    }
}

export const getAllDashboardData = async() => {
    try {
        const response = await axiosInstanceAdmin.get('/get-dashboardData')
        return response.data
    } catch (error) {
        return error.response
    }
}


import { axiosInstanceUser } from '../axiosInstance';

export const signupOTP = async () => {
    try {
        const response = await axiosInstanceUser.post("/otp")
        return response.data;
    } catch (error) {
        return error.response
    }
}


export const signupUser = async (payload) => {
    try {
        const response = await axiosInstanceUser.post("/signup",(payload))
        return response.data;
    } catch (error) {
        return error.response
    }
}

export const LoginUser = async (payload) => {
    try {
        const response = await axiosInstanceUser.post("/login",(payload))
        return response.data;
    } catch (error) {
        return error.response
    }
}

//Current user find
export const getCurrentUser = async(payload)=>{
    try {
        const response = await axiosInstanceUser.post("/getcurrentuser",(payload))
        return response.data
    } catch (error) {
        return error.response
    }
}
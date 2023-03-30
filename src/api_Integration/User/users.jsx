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

//get the showsDate
export const getShowDates = async()=>{
    try{
        const response = await axiosInstanceUser.get('/get-show-dates')
        return response.data
    }catch(error){
        return error.response
    }
}

export const getShows = async(payload)=>{
    try {
       const response = await axiosInstanceUser.post('/get-shows',(payload)) 
       return response.data
    } catch (error) {
        return error.response
    }
}

export const getTheaterDetails = async(payload) => {
    try {
        const response = await axiosInstanceUser.post('/get-theater',(payload))
        return response.data
    } catch (error) {
        return error.response
    }
}

export const getCreateOrder = async(payload) => {
    try {
        const response = await axiosInstanceUser.post('/get-create-order',(payload))
        return response.data        
    } catch (error) {
        return error.response
    }
}

export const verifyPaymentUser = async(payload) => {
    try {
        const response = await axiosInstanceUser.post('/verify-payment',(payload))
        return response.data
    } catch (error) {
        return error.response
    }
}



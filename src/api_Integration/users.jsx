import axios from 'axios';
import { axiosInstance }  from './index'

export const signupUser = async (payload) => {
    try {
        console.log('coming')
        const response = await axios.post("http://localhost:5000/api/users/signup",payload)
        return response.data;
    } catch (error) {
        return error.response
    }
}

export const LoginUser = async (payload) => {
    try {
        const response = await axiosInstance.post("/api/user/login",payload)
        return response.data;
    } catch (error) {
        return error.response
    }
}
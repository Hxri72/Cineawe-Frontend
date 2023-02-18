import axios from 'axios';

export const signupOTP = async () => {
    try {
        const response = await axios.post("http://localhost:5000/api/users/otp")
        return response.data;
    } catch (error) {
        return error.response
    }
}


export const signupUser = async (payload) => {
    try {
        const response = await axios.post("http://localhost:5000/api/users/signup",payload)
        return response.data;
    } catch (error) {
        return error.response
    }
}

export const LoginUser = async (payload) => {
    try {
        const response = await axios.post("http://localhost:5000/api/users/login",payload)
        return response.data;
    } catch (error) {
        return error.response
    }
}

//Current user find
export const getCurrentUser = async(payload)=>{
    try {
        const response = await axios.post("http://localhost:5000/api/users/getcurrentuser",payload)
        return response.data
    } catch (error) {
        return error.response
    }
}
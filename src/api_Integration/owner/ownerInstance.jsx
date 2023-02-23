import { axiosInstanceOwner } from "../axiosInstance";

export const signupOwner = async(payload) => {
    try {
        const response = await axiosInstanceOwner.post('/ownersignup',(payload))
        return response.data;
    } catch (error) {
        return error.response
    }
}
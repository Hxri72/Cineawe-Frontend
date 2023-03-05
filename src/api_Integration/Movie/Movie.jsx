import { axiosInstanceMovie } from "../axiosInstance";
import {API_KEY} from '../../constants/constants'

export const getBannerMovie = async() => {

    try {
        const response = await axiosInstanceMovie.get(`/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
        return response.data
    } catch (error) {
        return error.response
    }
}

export const getEnglishMovies = async() => {
    try {
        const response = await axiosInstanceMovie.get(`/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
        return response.data
    } catch (error) {
        return error.response
    }
}

export const getMalayalamMovies = async () => {
    try {
        const response = await axiosInstanceMovie.get(`/movie/now_playing?api_key=${API_KEY}&language=ml&region=IN&page=1&with_original_language=ml`)
        return response.data
    } catch (error) {
        return error.response
    }
}

export const getTamilMovies = async () => {
    try {
        const response = await axiosInstanceMovie.get(`movie/now_playing?api_key=${API_KEY}&language=ta&region=IN&page=1&with_original_language=ta`)
        return response.data
    } catch (error) {
        return error.response
    }
}
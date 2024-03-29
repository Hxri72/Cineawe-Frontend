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

// export const getEnglishMovies = async() => {
//     try {
//         const response = await axiosInstanceMovie.get(`/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
//         return response.data
//     } catch (error) {
//         return error.response
//     }
// }

// export const getMalayalamMovies = async () => {
//     try {
//         const response = await axiosInstanceMovie.get(`/movie/now_playing?api_key=${API_KEY}&language=ml&region=IN&page=1&with_original_language=ml`)
//         return response.data
//     } catch (error) {
//         return error.response
//     }
// }

// export const getTamilMovies = async () => {
//     try {
//         const response = await axiosInstanceMovie.get(`/movie/now_playing?api_key=${API_KEY}&language=ta&region=IN&page=1&with_original_language=ta`)
//         return response.data
//     } catch (error) {
//         return error.response
//     }
// }


export const getMovieDetails = async(payload) => {
    try {
        const response = await axiosInstanceMovie.get(`/movie/${payload}?api_key=${API_KEY}&language=en-US`)
        return response.data
    } catch (error) {
        return error.response
    }
}

export const getCastDetails = async(payload) => {
    try {
        const response = await axiosInstanceMovie.get(`/movie/${payload}/credits?api_key=${API_KEY}`)
        return response.data
    } catch (error) {
        return error.response
    }
}

export const getMoviename = async (payload) => {
    try {
        const response = await axiosInstanceMovie.get(`/search/movie?api_key=${API_KEY}&query=${payload}`)
        return response.data
    } catch (error) {
        return error.response
    }
}

export const getMovieDetailsByName = async (payload) => {
    try{
        const response = await axiosInstanceMovie.get(`/search/movie?api_key=${API_KEY}&query=${payload}`)
        return response.data
    }catch(error){
        return error.response
    }
}
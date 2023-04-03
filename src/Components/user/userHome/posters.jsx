import React, { Fragment } from 'react'

import applogo from "../../../Assets/user/userSignup/Cineawe.png";
import { useEffect } from 'react';
import { useState } from 'react';
import { imageUrl } from '../../../constants/constants';
import { useNavigate } from 'react-router-dom';
import { getAllMovies, getEnglishMovies } from '../../../api_Integration/User/users';
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../../Redux/loadersSlice";


function Posters() {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [englishMovies,setEnglishMovies] = useState([])
  const [malayalamMovies,setMalayalamMovies] = useState([])
  const [TamilMovies,setTamilMovies] = useState([])

  const handleMovie = (movieId) => {
    navigate('/movie-details',{state:movieId})
  }

  useEffect(()=>{
    try {
      const fetchData1 = async() => {
        dispatch(showLoading())
        const response1 = await getAllMovies()
        console.log(response1.data)
        setEnglishMovies(response1.data.englishMovies)
        setMalayalamMovies(response1.data.malayalamMovies)
        setTamilMovies(response1.data.tamilMovies)
        dispatch(hideLoading())
      }
      fetchData1();
    } catch (error) {
      console.log('something error')
    }
    
  },[])

  return (
    <Fragment>

    <div className='rowPosters'>
      <div>
        <h3 className='text-white font-semibold text-xl p-4'>English Movies</h3>
        <div className='displayMovies flex overflow-x-scroll overflow-y-hidden w-full'>
          
          {englishMovies.map((obj)=>
              <img className='postersHome cursor-pointer' alt='posters' loading='lazy' src={`${imageUrl+obj.poster_path}`} onClick={()=>handleMovie(obj.id)}/>
              )}
          
          
        </div>
      </div>

      <div className='w-full h-48 '>
        <div className='innerBannerDiv w-full h-full p-10'>
          <div className='innerBanner flex'>
            <div className='app-logo -mt-10'>
                <img src={applogo} alt='applogo'/>
            </div>

            <div className='items p-5 pl-60'>
              <div>
              <h1 className='text-white text-3xl font-medium'>Endless Entertainment Anywhere,Anytime</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className='text-white font-semibold text-xl p-4'>Malayalam Movies</h3>
        <div className='displayMovies flex overflow-x-scroll overflow-y-hidden w-full'>
            {malayalamMovies.map((obj)=>
            
            <img className='postersHome cursor-pointer' alt='posters' src={`${imageUrl+obj.poster_path}`} onClick={()=>handleMovie(obj.id)}/>
            )}

        </div>
      </div>

      <div>
        <h3 className='text-white font-semibold text-xl p-4'>Tamil Movies</h3>
        <div className='displayMovies flex overflow-x-scroll overflow-y-hidden w-full'>
          {TamilMovies.map((obj) =>
            <img className='postersHome cursor-pointer' alt='posters' src={`${imageUrl+obj.poster_path}`} onClick={()=>handleMovie(obj.id)}/>
            )
          }
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Posters

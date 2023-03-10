import React, { Fragment } from 'react'

import applogo from "../../../Assets/user/userSignup/Cineawe.png";
import { useEffect } from 'react';
import { getEnglishMovies, getMalayalamMovies, getTamilMovies } from '../../../api_Integration/Movie/Movie';
import { useState } from 'react';
import { imageUrl } from '../../../constants/constants';
function Posters() {

  const [englishMovies,setEnglishMovies] = useState([])
  const [malayalamMovies,setMalayalamMovies] = useState([])
  const [TamilMovies,setTamilMovies] = useState([])

  useEffect(()=>{
    try {
      const fetchData1 = async() => {
        const response1 = await getEnglishMovies()
        const response2 = await getMalayalamMovies()
        const response3 = await getTamilMovies()
  
        setEnglishMovies(response1.results)
        setMalayalamMovies(response2.results)
        setTamilMovies(response3.results)
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
              <img className='postersHome cursor-pointer' alt='posters' src={`${imageUrl+obj.poster_path}`}/>
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
            
            <img className='postersHome cursor-pointer' alt='posters' src={`${imageUrl+obj.poster_path}`}/>
            )}

        </div>
      </div>

      <div>
        <h3 className='text-white font-semibold text-xl p-4'>Tamil Movies</h3>
        <div className='displayMovies flex overflow-x-scroll overflow-y-hidden w-full'>
          {TamilMovies.map((obj) =>
            <img className='postersHome cursor-pointer' alt='posters' src={`${imageUrl+obj.poster_path}`}/>
            )
          }
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Posters

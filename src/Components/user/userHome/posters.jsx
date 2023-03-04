import React, { Fragment } from 'react'

import posters from '../../../Assets/user/userSignup/MovieImage2.jpg'
import applogo from "../../../Assets/user/userSignup/Cineawe.png";
function Posters() {



  return (
    <Fragment>

    <div className='rowPosters'>
      <div>
        <h3 className='text-white font-semibold text-xl p-4'>Recommended Movies</h3>
        <div className='displayMovies flex overflow-x-scroll overflow-y-hidden w-full'>

          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
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
        <h3 className='text-white font-semibold text-xl p-4'>English Movies</h3>
        <div className='displayMovies flex overflow-x-scroll overflow-y-hidden w-full'>

          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
        </div>
      </div>

      <div>
        <h3 className='text-white font-semibold text-xl p-4'>Malayalam Movies</h3>
        <div className='displayMovies flex overflow-x-scroll overflow-y-hidden w-full'>

          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
          <img className='postersHome' alt='posters' src={posters}/>
        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Posters

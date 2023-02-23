import React, { Fragment } from 'react'

import posters from '../../../Assets/user/userSignup/MovieImage2.jpg'

function Posters() {



  return (
    <Fragment>

    <div className='rowPosters'>
        <h3 className='text-white font-semibold text-xl p-4'>Action Movies</h3>
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
    </Fragment>
  )
}

export default Posters

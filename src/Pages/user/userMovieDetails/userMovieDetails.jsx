import React, { Fragment } from 'react'
import Header from '../../../Components/user/userHome/Header'
import MovieBanner from '../../../Components/user/userMovieDetals/MovieBanner'

function MovieDetails() {
  return (
    <Fragment>
        <div className='maindiv'>
            <Header/>
            <MovieBanner/>
        </div>
    </Fragment>
  )
}

export default MovieDetails

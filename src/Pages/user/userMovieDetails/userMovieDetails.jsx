import React, { Fragment } from 'react'
import Footer from '../../../Components/user/userHome/footer'
import Header from '../../../Components/user/userHome/Header'
import MovieBanner from '../../../Components/user/userMovieDetals/MovieBanner'

function MovieDetails() {
  return (
    <Fragment>
        <div className='maindiv'>
            <Header/>
            <MovieBanner/>  
            <Footer/>
        </div>
    </Fragment>
  )
}

export default MovieDetails

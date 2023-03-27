import React, { Fragment, useEffect, useState } from 'react'
import '../../../stylesheets/user/userMovieDetails.css'
import '../../../stylesheets/user/userAboutMovie.css'
import { useLocation, useNavigate } from 'react-router'
import { getCastDetails, getMovieDetails } from '../../../api_Integration/Movie/Movie'
import {imageUrl} from '../../../constants/constants'


function MovieBanner() {

  const location = useLocation()
  const movieId = location.state
  const navigate = useNavigate()

  const [movieDetails,setMovieDetails] = useState('')
  const [genres,setGenres] = useState([])
  const [cast,setCast] = useState([])
  
  useEffect(()=>{

    const fetchData = async() => {
      const response = await getMovieDetails(movieId)
      const response2 = await getCastDetails(movieId)
      setMovieDetails(response)
      setGenres(response?.genres)
      setCast(response2.cast)
    }
    fetchData();
    window.scrollTo(0, 0);
  },[movieId])

  const myStyle = {
    backgroundImage: `url(${imageUrl+movieDetails.backdrop_path})`,
    backgroundSize: 'cover',
  }

  const handleBookTicket = () => {
    navigate('/show-select',{state:movieId})
  }

  return (
    <Fragment>
        <div className='mainDivMovie'>
          <div className='w-full h-96 flex mainDivMovieBanner'>  
            <div className='bg-image w-full absolute h-full opacity-40' style={myStyle}></div>
            <div className='p-12 w-full'>
              <div className='moviePosterDiv'>  
                <img className='w-full h-full object-cover object-top rounded-md' alt='movieposter' src={`${imageUrl+movieDetails?.poster_path}`}></img>
              </div>
              <div className='movieDetailsDiv flex justify-end'>
                <div className='wholeDiv w-1/2 h-full'>

                <div className='movieHeadUser  text-slate-50'>
                  <h1>{movieDetails ? movieDetails.title:''}</h1>  
                </div>
                <br/>
                <div className='movieHeadUser  flex justify-start'>
                  {genres.length > 0 &&  genres.map((genre,index)=>(
                    <h1 key={index} className='movieInput'>{genre.name}/</h1>
                    ))}
                </div>
                <div className='movieHeadUser pt-5 pr-10'>
                  <h1 className='movieInput'>2hr 2mnts</h1>
                </div>
                <div className='bookTicketDiv  my-16'>
                  
                  <button className='bookTicketButtonDiv' onClick={()=>handleBookTicket()}>Book Ticket</button>
                  
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='aboutMovieDetailsMainDiv'>
            <div className='aboutDiv'>
                <h1 className='aboutHeader'>About the Movie</h1>
                <div className='aboutDescription'>
                    <p>{movieDetails ? movieDetails.overview:''}</p>
                </div>

                <div className='castDiv'>
                    <h1 className='aboutCast'>Cast</h1>
                    <div className='castProfile flex'>

                        <div className='divProfile'>
                            <div className='castProfilePicDiv'>
                             <img className='castProfilePic' alt='castProfile' src={`${cast.length && imageUrl+cast[0].profile_path}`}/>
                            </div>
                            <h1 className='my-5 font-semibold text-center'>{cast.length > 0 ? cast[0].name:''}</h1>
                        </div>

                        <div className='divProfile'>
                            <div className='castProfilePicDiv'>
                             <img className='castProfilePic' alt='castProfile' src={`${cast.length && imageUrl+cast[1].profile_path}`}/>
                            </div>
                            <h1 className='my-5 font-semibold text-center'>{cast.length > 0 ? cast[1].name:''}</h1>
                        </div>

                        <div className='divProfile'>
                            <div className='castProfilePicDiv'>
                             <img className='castProfilePic' alt='castProfile' src={`${cast.length && imageUrl+cast[2].profile_path}`}/>
                            </div>
                            <h1 className='my-5 font-semibold text-center'>{cast.length > 0 ? cast[2].name:''}</h1>
                        </div>


                    </div>
              </div>
            </div>
        </div>
    </Fragment>
  )
}

export default MovieBanner

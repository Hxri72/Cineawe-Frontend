import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router";
import { getMovieDetails } from "../../../api_Integration/Movie/Movie";
import { getShowDates, getShows } from "../../../api_Integration/User/users";
import "../../../stylesheets/user/userShowDetails.css";

function ShowDetails() {

    const location = useLocation();
    const movieId = location.state
    const [selectedValue, setSelectedvalue] = useState("");

    const [movieDetails,setMovieDetails] = useState('')
    const [showDate,setShowDate] = useState([])
    const [shows,setShows] = useState([])

  const handleChange = async(e) => {
    try {
        setSelectedvalue(e.target.value)
        const data = {
            date: e.target.value,
            movieName:movieDetails.title
        }
        const response = await getShows({data})
        setShows(response.data)
    } catch (error) {
        return error.message
    }
    
  };


  useEffect(()=>{
    const fetchData = async()=>{
        const response = await getMovieDetails(movieId)
        const responseDate = await getShowDates()
        setShowDate(responseDate.data)
        setMovieDetails(response)
    }
    fetchData();
  },[movieId])
  console.log(shows);
  return (
    <Fragment>
      <div className="mainDivShowDetails">
        <div className="showDetailsTop">
          <div className="flex">
            <div>
              <div className="movieHead text-slate-50">
                <h1>{movieDetails ? movieDetails.title : '' }</h1>
              </div>

              <div className="genreDetails">
                <h1>{movieDetails ? movieDetails.genres[0].name:''}</h1>
              </div>
            </div>

            <div className="dateDropdownDiv">
                
              <select
                className="bg-slate-600 px-3 py-1 rounded-lg text-white"
                value={selectedValue}
                onChange={handleChange}
              >
                <option value="">Select a Date</option>
                {showDate.map((date)=>(
                <option >{date.showdate}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="showDetailsDiv">
            <div className="wholeDataDiv">
                {shows.map((show)=>(
                <div className="showsDataDiv">
                    <div className="theaterNameDiv">
                        <h1>{show?show.theaterName:''}</h1>
                    </div>

                    <div className="showsNameDiv">
                        <div className="flex">
                          {show?.shows.map((time)=>( 
                          <span className="mr-10 cursor-pointer px-5 py-2 bg-slate-500 rounded-lg text-sm">{time?.showtime}</span>
                          ))}
                           
                        </div>
                    </div>

                </div>
                ))}
            </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ShowDetails;

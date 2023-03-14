import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import { getTheaters, postShowData } from '../../../api_Integration/owner/ownerInstance'
import '../../../stylesheets/theater_owners/ownerAddShows.css'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


function AddShow() {
  const [theaters,setTheaters] = useState([])
  const navigate = useNavigate()
  
  const [theatername,setTheatername] = useState('')
  const [showname,setShowname] = useState('')
  const [moviename,setMoviename] = useState('')
  const [ticketprice,setTicketprice] = useState('')
  const [showdate,setShowdate] = useState('')
  const [showtime,setShowtime] = useState('')
  const [availableseats,setAvailableseats] = useState('')
  const [totalseats,setTotalseats] = useState('')

  const showData = {
    theatername:theatername,
    showname:showname,
    moviename:moviename,
    ticketprice:ticketprice,
    showdate:showdate,
    showtime:showtime,
    availableseats:availableseats,
    totalseats:totalseats
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const response = await postShowData({showData})
    console.log(response)
    if(response.success){
      Swal.fire(response.message)
      .then(()=>{
        navigate('/owner/owner-show-management')
      })
    }
  }

  // function handleDateChange(event) {
  //   const dateValue = event.target.value;
  //   console.log(dateValue)
  //   const formattedDate = formatDate(dateValue);
  //   console.log(formattedDate)
  //   setShowdate(formattedDate);
  // }

  // function formatDate(date) {
  //   const parts = date.split("-");
  //   const year = parts[0];
  //   const month = parts[1];
  //   const day = parts[2];
  //   return `${day}/${month}/${year}`;
  // }

  

  useEffect(()=>{
    const fetchData = async() => {
      const response = await getTheaters()
      if(response.success){
        setTheaters(response.data)
      }
    }
    fetchData();
  },[])
 
  return (
    <Fragment>
    <div className='mainDivOwner'>
      <div className='addShowsCoreDiv'>
        <div className='addShowsFormDiv'>
          <div className='addShowsHead'>
            <h1 className='text-2xl font-semibold p-7'>Add Shows</h1>
          </div>

          <form onSubmit={handleSubmit}>
          <div className='flex justify-around'>
          
          <select
          className='addShowInput'
          type='text'
          name='theatername'
          value={theatername}
          onChange={(e)=>setTheatername(e.target.value)}
          >
            <option value="" disabled selected>Select Theater</option>
            {theaters.map((theater)=>(

              <option>{theater.theaterName}</option>
            ))
            }
          </select>

          <input
          className='addShowInput'
          type='text'
          name='Showname'
          placeholder='Showname'
          value={showname}
          onChange={(e)=>setShowname(e.target.value)}
          >
          </input>

          <input
          className='addShowInput'
          type='text'
          name='moviename'
          placeholder='Movie Name'
          value={moviename}
          onChange={(e)=>setMoviename(e.target.value)}
          >
          </input>
          </div>

          <div className='flex justify-around p-10 -ml-14'>
            <input
            className='addShowInput'
            type='number'
            name='ticketprice'
            placeholder='Ticket Price'
            value={ticketprice}
            onChange={(e)=>setTicketprice(e.target.value)}
            ></input>
            <input
            className='addShowInput'
            type='date'
            name='date'
            value={showdate}
            onChange={(e) => setShowdate(e.target.value)}
            ></input>
            <input
            type='time'
            name='time'
            value={showtime}
            onChange={(e)=>setShowtime(e.target.value)}
            ></input>
          </div>

          <div className='flex justify-start ml-5'>
            <input 
            className='addShowInput'
            type='text'
            name='availableseats'
            placeholder='Available Seats'
            value={availableseats}
            onChange={(e)=>setAvailableseats(e.target.value)}
            ></input>
            <input
            className='ml-7'
            type='text'
            name='totalseats'
            placeholder='Total Seats'
            value={totalseats}
            onChange={(e)=>setTotalseats(e.target.value)}
            ></input>
            
            
          </div>
            <div className='flex justify-evenly my-7'>
              <button type='submit' className='border-none w-24 h-9 rounded-md bg-slate-800 text-white hover:bg-slate-900'>Add Show</button>
            </div>
          </form>  

        </div>
      </div>
    </div>
    </Fragment>
  )
}

export default AddShow

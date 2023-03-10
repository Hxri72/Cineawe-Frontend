import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { deleteShow, getShowDetails } from '../../../api_Integration/owner/ownerInstance';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrash  } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2'

function ShowDetails() {

    const [shows,setShows] = useState([])   
    const location = useLocation();
    const data = location.state;
    const theaterId = data.theaterId

    const handleDeleteButton = async(showDetails) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You are Deleting a show!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete!'
          }).then(async(result) => {
            if (result.isConfirmed) {
                const response = await deleteShow(showDetails)
                if(response.success){
                    Swal.fire(response.message).then(()=>{
                      setShows(response.data.shows)
                    })
                }
            }})
    }

    useEffect(()=>{
        const fetchData = async() => {
            const response = await getShowDetails({theaterId})
            if(response.success){
                setShows(response.data)
            }
        }
        fetchData();
    },[theaterId])
  return (
    <div className='mainDivOwner'>
        <div className='dashboardHead'>
            <h1 className='text-2xl font-semibold'>{shows.length && shows[0].theatername} Shows</h1>
        </div>

        <div className='gapDiv'></div>

        <div className='showManagementTable overflow-x-auto'>
            <table className='overflow-auto min-w-max'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Show Name</th>
                        <th>Movie</th>
                        <th>Date and Time</th>
                        <th>Ticketprice</th>
                        <th>Available Seats</th>
                        <th>Total Seats</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {shows.map((show,index)=>(

                    <tr className='text-center'>
                        <td>{index + 1}</td>
                        <td>{show.showname}</td>
                        <td>{show.moviename}</td>
                        <td className='flex flex-col'><span>{show.showdate }</span> <span>{ show.showtime}</span></td>
                        <td>{show.ticketprice}</td>
                        <td>{show.availableseats}</td>
                        <td>{show.totalseats}</td>
                        <td><span className='cursor-pointer' onClick={()=>handleDeleteButton({showId:show._id,theaterName:show.theatername})}><FontAwesomeIcon icon={ faTrash }/></span></td>

                    </tr>
                        ))}
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ShowDetails

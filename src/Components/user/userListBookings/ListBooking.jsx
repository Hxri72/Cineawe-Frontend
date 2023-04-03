import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { cancelBooking, getTickets } from '../../../api_Integration/User/users'
import '../../../stylesheets/user/userListBooking.css'
import Swal from 'sweetalert2'

function ListBooking() {
  const [bookedTickets,setBookedTickets] = useState([])
  const {user} = useSelector((state) => state.users)

  useEffect(()=>{
    const fetchData = async() => {
      const mailData = {
        userMail:user.email
      }
      const response = await getTickets(mailData)
      setBookedTickets(response.data)
    }
    fetchData();
  },[user.email])

  const handleCancel = (bookingId,showId,selectedSeats,theaterName,userMail) => {

    const data = {
      bookingId : bookingId,
      showId : showId,
      selectedSeats : selectedSeats,
      theaterName : theaterName,
      userMail : userMail
    }

    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
    }).then(async(result) => {
      if (result.isConfirmed) {
        const response = await cancelBooking(data)
        if(response.success){
        Swal.fire(
          'Cancelled!',
          'The Booking is cancelled. The refund will done in few days',
          'success'
        ).then(()=>{
          setBookedTickets(response.data)
        })

        }
        
      }
    })
  }

  return (
    <div className='mainDivBookings'>
        <div className='innerDivBookings'>

            {bookedTickets.length !== 0 ? (

            
            <div className='showHead'>
              <h1 className='text-2xl font-bold'>Bookings</h1>
              <div className='ticketOutsideDiv'>
                {bookedTickets.map((ticket)=>(
                
                <div className='ticketDiv'>
                  <div className='ticketDetailsone'>

                    <div className='movieName'>
                      <h1 className='text-lg font-medium'>{ticket.movieName}</h1>
                    </div>

                    <div>
                      <h1>
                        {ticket.selectedSeats.map((seat)=>(
                          seat.id + ' '
                        ))}
                         | {ticket.showDate} | {ticket.showTime}</h1>
                    </div>

                    <div>
                      <h1 className='font-medium'>{ticket.theaterName}</h1>
                    </div>

                  </div>

                  <div className='ticketDetailsTwo'>

                    <div className='ticketNumberDiv text-end'>
                      <h1 className='text-2xl font-semibold'>{ticket.selectedSeats.length} Tickets</h1>
                    </div>

                    <div className='ticketPriceDiv text-end'>
                      <h1 className='text-lg  font-medium'> Rs:{ticket.totalPrice}/-</h1>
                      <small className='text-slate-400'>Including convenience fee</small>
                    </div>

                    <div className='flex justify-end mt-2'>
                      <button className='px-3 py-1 rounded-lg bg-red-600 text-white font-medium' onClick={()=>handleCancel(ticket._id,ticket.showId,ticket.selectedSeats,ticket.theaterName,ticket.userMail)}>Cancel</button>
                    </div>
                  </div>

                </div>
                ))}
              </div>
            </div>) :
            (
              <div className='noShowsHead'>
                <h1 className='text-3xl font-bold text-slate-400'>No Booked Tickets</h1>
              </div>
            )}

        </div>
    </div>
  )
}

export default ListBooking

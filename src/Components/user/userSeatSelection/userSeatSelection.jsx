import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { getTheaterDetails } from '../../../api_Integration/User/users'
import'../../../stylesheets/user/userSeatSelection.css'

function SeatSelect() {

  const [theaterSeats,setTheaterSeats] = useState([])
  const [theaterDetails,setTheaterDetails] = useState('')
  const [selectedSeats,setSelectedSeat] = useState([])

  const navigate = useNavigate()
  const location = useLocation()
  const showData = location.state.show
  const date = location.state.selectedValue

  const handleSeat = (seatDetails) => {
    try {
    if(seatDetails.seatStatus === 'available'){
      seatDetails.seatStatus = 'selected'
      setSelectedSeat([...selectedSeats,seatDetails])
    }else{
      seatDetails.seatStatus = 'available'
      const updatedSeats = selectedSeats.filter(
        (seat) => seat.id !== seatDetails.id
      )
      setSelectedSeat(updatedSeats)
      
    }
    } catch (error) {
      console.log(error.message)
    }
  }

  const data = {
    showData:showData,
    selectedSeats:selectedSeats,
    date:date
  }

  const handlePayment = (e) => {
    e.preventDefault();
    navigate('/payment',{state:{data}})
  }
  
  useEffect(() => {
    const fetchData = async()=>{
      const response = await getTheaterDetails({theaterName:showData.theatername})
      setTheaterDetails(response.data[0])
    }
    fetchData();
    setTheaterSeats(showData.seats);
    window.scrollTo(0, 0);
  }, [showData.seats,showData.theatername]);

  return (
    <div className='mainDivSeatSelect p-10'>
      <div className='insideDivSeat'>

        <div className='priceShowDiv'>
          <div className='flex justify-center'>
            <h1 className='font-semibold text-red-600'>You have selected {selectedSeats.length} seats for a price of {selectedSeats.length * showData.ticketprice} rs/- <span className='cursor-pointer  px-3 py-2 bg-slate-400  hover:bg-slate-500 rounded-lg mx-5 text-black' onClick={handlePayment}>Pay now</span></h1>
          </div>
        </div>

        <div className='seatDetailsDiv grid grid-cols-3 gap-4 p-3'>
          <div className='seatAvailable flex justify-center'>
            <div className='w-4 h-4 bg-slate-50 my-1 mr-1 '></div>
            <h1 className='font-semibold'>Available</h1>
          </div>
          <div className='seatAvailable flex justify-center'>
            <div className='w-4 h-4 bg-slate-400 my-1 mr-1'></div>
            <h1 className='font-semibold'>Sold</h1>
          </div>
          <div className='seatAvailable flex justify-center'>
            <div className='w-4 h-4 bg-green-700 my-1 mr-1'></div>
            <h1 className='font-semibold'>Selected</h1>
          </div>
        </div>
        
        <div className='theaterScreenDiv'>
          <div className='screenDivInside'>
            <div className='flex justify-center mb-10'>
            <h1 className='mx-auto text-slate-400 font-medium'>All eyes this way please</h1>
            </div>
            <div className='screen'>SCREEN</div>
          </div>
        </div>

        <div className='wholeSeatDiv'>
          <div className='seatArrangeDiv mx-auto '>
            <div className='w-full h-auto justify-center my-auto flex flex-wrap py-10'>
            {theaterSeats && theaterSeats.map((seat,index)=>{ 
              if(index % theaterDetails.totalColumns === 0){
                return (
                  <>
                  {index !== 0 && <br />} 
                  
                  <div className='w-full flex justify-center'></div>
                  <div className='m-2'>
                    {seat.seatStatus !== 'sold' ? (

                      <div className={`seatClass ${seat.seatStatus === 'selected' ? 'seatSelected' : ''}`} onClick={()=>handleSeat(seat)}></div>
                    ) : (

                      <div className={'seatSold'}></div>
                      
                    )
                    
                    }
                  </div>
                  </>
                )
              }else{
                return (
                  <div className='m-2'>
                    {seat.seatStatus !== 'sold' ? (

                      <div className={`seatClass ${seat.seatStatus === 'selected' ? 'seatSelected' : ''}`} onClick={()=>handleSeat(seat)}></div>
                    ) : (

                      <div className={'seatSold'}></div>
                      
                    )
                    
                    }
                  </div>
                );
              }
            })}
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SeatSelect

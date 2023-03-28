import React, { Fragment, useEffect } from 'react'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { editTheater, fetchTheaterDetails } from '../../../api_Integration/owner/ownerInstance'

function EditTheater() {

    const [theatername,setTheaterName] = useState('')
    const [address,setAddress] = useState('')
    const [phone,setPhone] = useState('')
    const [totalSeats,setTotalSeats] = useState('')

    const [theater,setTheater] = useState([])

    const navigate = useNavigate()
    const location = useLocation()
    const theaterId = location.state.theaterId

    const theaterData = {
        theatername:theatername,
        address:address,
        phone:phone,
        totalseats:totalSeats,
        theaterId:theaterId
    }
    
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const response = await editTheater(theaterData)
            console.log(response)
            if(response.success){
                navigate('/owner/owner-theater-management')
            }
        } catch (error) {
            return error.response
        }
    }

    useEffect(()=>{
        const fetchData = async() => {
            console.log('useEffect working')
            const response = await fetchTheaterDetails(location.state)
            if(response.success){
                setTheater(response.data)
                setTheaterName(response.data.theaterName)
                setAddress(response.data.address)
                setPhone(response.data.phone)
                setTotalSeats(response.data.totalSeats)
            }
        }
        fetchData();
    },[location.state])

  return (
    <Fragment>
    <div className='mainDivOwner'>
        <div className='dashboardHead'>
            <h1 className='text-2xl font-semibold '>Edit Theater</h1>
        </div>

            <div className='flex justify-center'>
        <div className='addTheaterFormDiv'>
            <form onSubmit={handleSubmit}>
              <div className='partOneInput'>
                <div className='flex flex-col'>
                <label className='labelClass'>Theater</label>
                <input className='inputFieldAddTheaters'
                 placeholder={theater && theater.theaterName} 
                 name='theatername' 
                 type='text' 
                 value={theatername}
                 onChange={(e)=> setTheaterName(e.target.value)}
                 ></input> 
                </div>

                <div className='flex flex-col'>
                <label className='labelClass'>Address</label>
                <input 
                className='inputFieldAddTheaters' 
                placeholder={theater.address}
                name='address'
                type='text'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                ></input>
                </div>
              </div>

              <div className='partTwoInput'>
                <div className='flex flex-col'>
                    <label className='labelClass'>Phone</label>
                    <input className='inputFieldAddTheaters'
                    placeholder={theater.phone}
                    name='phone'
                    type='number'
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    ></input>
                </div>
                <div className='flex flex-col'>
                    <label className='labelClass'>Total Seats</label>
                    <input 
                    className='inputFieldAddTheaters'
                    placeholder={theater.totalSeats}
                    name='availableseats'
                    type='number'
                    value={totalSeats}
                    onChange={(e)=>setTotalSeats(e.target.value)}
                 ></input>
                </div>
              </div>

              <div className='addTheatersButtonDiv'>
                <button type='submit' className='addTheatersButton'>Update</button>
              </div>

            </form>
        </div>
        </div>
    </div>
    </Fragment>
  )
}

export default EditTheater

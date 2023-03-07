import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { getTheaters } from '../../../api_Integration/owner/ownerInstance'
import '../../../stylesheets/theater_owners/ownerTheaterManagement.css'

function TheaterManage() {

  const [theaters,setTheaters] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    const fetchTheater = async() =>{
      const response = await getTheaters()
      console.log(response.data)
      if(response.success){
        setTheaters(response.data)
      }
    };
    fetchTheater();
  },[])

  const handleAddTheater = () => {
      navigate('/owner/owner-add-theater')
  }

  return (
    <div className='mainDivOwner'>
      <div className='dashboardHead'>
        <h1 className='text-2xl font-semibold'>Theater Management</h1>
      </div>

      <div className='flex justify-end pr-24'>
          <span onClick={handleAddTheater} className=' border-gray-900 p-2 rounded-md bg-slate-300 cursor-pointer hover:bg-slate-400'>Add Theater</span>
      </div>

      <div>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Theater name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Total Seats</th>
                <th></th>
                <th></th>
              </tr>
              
            </thead>

            <tbody>
              {theaters.map((theater,index)=>(
              <tr className='text-center'>
                <td>{index + 1}</td>
                <td>{theater.theaterName}</td>
                <td>{theater.address}</td>
                <td>{theater.phone}</td>
                <td>{theater.totalSeats}</td>
                <td><span className='cursor-pointer'>Edit</span></td>
                <td>Delete</td>
              </tr>
              ))} 
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default TheaterManage

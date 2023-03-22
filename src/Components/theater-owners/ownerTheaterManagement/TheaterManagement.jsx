import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import {  deleteTheater, getTheaters } from '../../../api_Integration/owner/ownerInstance'
import '../../../stylesheets/theater_owners/ownerTheaterManagement.css'
import Swal from 'sweetalert2'
import { useSelector } from 'react-redux'

function TheaterManage() {

  const [theaters,setTheaters] = useState([])
  const navigate = useNavigate()
  const {owner} = useSelector((state)=>state.owners)

  useEffect(()=>{
    const fetchTheater = async() =>{
      const ownerMail = owner.email
      console.log(ownerMail)
      const response = await getTheaters({ownerMail:ownerMail})
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

  const handleEditButton = (theaterId) => {
    try {
      console.log(theaterId);
      navigate('/owner/owner-edit-theater',{state:{theaterId:theaterId}})
    } catch (error) {
      return error.message
    }
  }

  const handleDeleteButton = async(theaterId) => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You are Deleting a Theater!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete!'
      }).then(async(result) => {
        if (result.isConfirmed) {
          const response = await deleteTheater({theaterId})
          if(response.success){
            Swal.fire(response.message).then(()=>{
              setTheaters(response.data)
            })
          }else{
            Swal.fire(response.message)
          }
        }})
    } catch (error) {
      return error.message
    }
  }

  return (
    <div className='mainDivOwner'>
      <div className='dashboardHead'>
        <h1 className='text-2xl font-semibold'>Theater Management</h1>
      </div>

      <div className='flex justify-end pr-24'>
          <span onClick={handleAddTheater} className=' border-gray-900 p-2 rounded-md bg-slate-300 cursor-pointer hover:bg-slate-400 mb-5'>Add Theater</span>
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
                <td ><span className='cursor-pointer border-2 border-slate-400 bg-slate-400 py-1 px-5 rounded-md' onClick={()=>handleEditButton(theater._id)}>Edit</span></td>
                <td><span className='cursor-pointer border-2 border-slate-400 bg-slate-400 py-1 px-4 rounded-md' onClick={()=>handleDeleteButton(theater._id)}>Delete</span></td>
              </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  )
}

export default TheaterManage

import React, { Fragment, useState } from 'react'
import { useEffect } from 'react'
import { deleteTheater} from '../../../api_Integration/owner/ownerInstance'
import Swal from 'sweetalert2'
import { getTheaters } from '../../../api_Integration/Admin/admin'

function ManageTheater() {

    const [theaters,setTheaters] = useState([])

    const handleDeleteButton = async(theaterId) => {
        try {
            Swal.fire({
                title: 'Are you sure?',
                text: "You are deleting a Theater!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Delete!'
              }).then(async(result) => {
                if (result.isConfirmed) {
                  const response = await deleteTheater({theaterId})
                  if(response.success){
                  Swal.fire(
                    'Deleted!',
                    'The Theater is deleted.',
                    'success'
                  ).then(()=>{
                    setTheaters(response.data)
                  })
          
                  }else{
                    Swal.fire(
                        'Theater not deleted',
                        'The theater have shows',
                        'error'
                    )
                  }
                }
              })
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(()=>{
        try {
            const fetchData = async() => {
                const response = await getTheaters()
                console.log(response)
                if(response.success){
                    setTheaters(response.data)
                }
            }
            fetchData();
        } catch (error) {
            console.log(error.message)
        }
    },[])

  return (
    <Fragment>
        <div className='mainDiv'>
            <div className='maindivInside'>
                <div className='mainContent'>
                    <div className='text-white p-12 text-2xl'>
                        <h1>Theater Management</h1>
                    </div>

                    <table>
                        <thead>
                            <tr className='text-white'>
                                <th>No</th>
                                <th>TheaterName</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Total Seats</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {theaters.map((theater,index)=>(
                            <tr className='text-center text-white'>
                                <td>{index + 1}</td>
                                <td>{theater.theaterName}</td>
                                <td>{theater.address}</td>
                                <td>{theater.phone}</td>
                                <td>{theater.totalSeats}</td>
                                <td><span className='cursor-pointer hover:bg-slate-800 bg-slate-700 py-1 px-5 rounded-md' onClick={()=>handleDeleteButton(theater._id)}>Delete</span></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default ManageTheater

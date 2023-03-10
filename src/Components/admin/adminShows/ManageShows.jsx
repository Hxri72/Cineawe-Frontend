import React, { Fragment } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { getTheaters } from '../../../api_Integration/owner/ownerInstance'

function ManageShows() {

    const [theaters,setTheaters] = useState([])
    const navigate = useNavigate()

    const handleShowsButton = (theaterId) => {
       try {
            navigate('/admin/admin-shows-manage',{state:{theaterId}})
       } catch (error) {
        console.log(error.message)
       }
    }

    useEffect(()=>{
        try {
            const fetchData = async() => {
                const response = await getTheaters()
                if(response.success){
                  setTheaters(response.data)
                }
              }
              fetchData();
        } catch (error) {
            console.log(error.response)
        }
    },[])

  return (
    <Fragment>
    <div className='mainDiv'>
        <div className='maindivInside'>
            <div className='mainContent'>
                <div className='text-white p-12 text-2xl'>
                    <h1>Show Management</h1>
                </div>

                <table>
                    <thead>
                        <tr className='text-white'>
                            <th>No</th>
                            <th>Theater Name</th>
                            <th>Address</th>
                            <th>Shows</th>
                        </tr>
                    </thead>

                    <tbody>
                        {theaters.map((theater,index)=>(

                        <tr className='text-white'>
                            <th>{index + 1}</th>
                            <th>{theater.theaterName}</th>
                            <th>{theater.address}</th>
                            <th><span className='bg-slate-700 hover:bg-slate-800 cursor-pointer py-1 px-5 rounded-md' onClick={()=>handleShowsButton(theater._id)}>shows</span></th>
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

export default ManageShows

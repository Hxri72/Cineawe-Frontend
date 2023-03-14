import React, { Fragment } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getTheaters } from '../../../api_Integration/owner/ownerInstance'
import '../../../stylesheets/theater_owners/ownerShowManagement.css'

function ShowManage(props) {

  const navigate = useNavigate()
  const [theaters,setTheaters] = useState([])

  const handleShowButton = (theaterId) => {
    navigate('/owner/owner-show-details',{state:{theaterId}})
  }

  useEffect(()=>{
    const fetchData = async() => {
      const response = await getTheaters()
      console.log(response) 
      if(response.success){
        setTheaters(response.data)
      }
    }
    fetchData();
  },[])

  return (
    <Fragment>
    <div className='mainDivOwner'>
      <div className='dashboardHead'>
        <h1 className='text-2xl font-semibold'>Show Management</h1>
      </div>
      
      <div className='flex justify-end pr-24'>
        <Link to={'/owner/owner-add-show'} >
        <button className='border-2 border-slate-600 w-32 h-10 rounded-md bg-slate-300'>Add Shows</button>
        </Link>
      </div>
      
      <div className='gapDiv'></div>

      <div className='showManagementTable'>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Theater Name</th>
              <th>Contact</th>
              <th></th>
            </tr>
          </thead>
            
          <tbody>
            {theaters.map((theater,index)=>(
          <tr>           
              <td className='text-center'>{index + 1} </td>
              <td className='text-center'>{theater.theaterName} </td>
              <td className='text-center'>{theater.phone}</td>
              
              <div className='flex justify-around'>
                  <td>
                  
                    <button className='border-2 border-slate-800 bg-slate-300 w-24 rounded-md ' onClick={()=>handleShowButton(theater._id)}>Shows</button>
                 
                  </td>
              </div>
              
            </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
    </Fragment>
  )
}

export default ShowManage

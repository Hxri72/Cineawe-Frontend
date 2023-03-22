import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { toast } from 'react-toast'
import { addTheater} from '../../../api_Integration/owner/ownerInstance'
import '../../../stylesheets/theater_owners/ownerAddTheater.css'

function AddTheater() {
  const navigate = useNavigate()
  const {owner} = useSelector((state)=> state.owners)

  const [theatername,setTheaterName] = useState('')
  const [address,setAddress] = useState('')
  const [phone,setPhone] = useState('')
  const [totalRows,setTotalRows] = useState('')
  const [totalColumns,setTotalColumns] = useState('')

  const theaterData = {
    theaterName:theatername,
    address:address,
    phone:phone,
    totalRows:totalRows,
    totalColumns:totalColumns,
    ownerEmail:owner.email
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await addTheater(theaterData)
    if(response.success){
      toast.success('Theater added successfully')
      navigate('/owner/owner-theater-management')
    }else{
      toast.error(response.message)
    }
  }

  return (
    <div className='mainDivOwner'>
        <div className='dashboardHead'>
            <h1 className='text-2xl font-semibold '>Add Theater</h1>
        </div>
        
        <div className='flex justify-center'>
        <div className='addTheaterFormDiv'>
            <form onSubmit={handleSubmit}>
              <div className='partOneInput'>
                <input className='inputFieldAddTheaters'
                 placeholder='Theater name' 
                 name='theatername' 
                 type='text' 
                 value={theatername}
                 onChange={(e)=> setTheaterName(e.target.value)}
                 ></input>
                <input 
                className='inputFieldAddTheaters' 
                placeholder='Address'
                name='address'
                type='text'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                ></input>
              </div>

              <div className='partTwoInput'>
                <input className='inputFieldAddTheaters'
                placeholder='Phone'
                name='phone'
                type='number'
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                 ></input>
                <input 
                className='inputFieldAddSeats'
                placeholder='Rows'
                name='theatreRows'
                type='number'
                value={totalRows}
                onChange={(e)=>setTotalRows(e.target.value)}
                 ></input>
                
                <input 
                className='inputFieldAddSeats'
                placeholder='Columns'
                name='theatreColumns'
                type='number'
                value={totalColumns}
                onChange={(e)=>setTotalColumns(e.target.value)}
                 ></input>
              </div>

              <div className='addTheatersButtonDiv'>
                <button type='submit' className='addTheatersButton'>Add Theater</button>
              </div>

            </form>
        </div>
        </div>
      
    </div>
  )
}

export default AddTheater

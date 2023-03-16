import React, { Fragment } from 'react'
import { useState } from 'react'
import '../../../stylesheets/user/userShowDetails.css'

function ShowDetails() {

    const [selectedValue,setSelectedvalue] = useState('')

    const handleChange = (e) => {
        setSelectedvalue(e.target.value)
    }
  return (
    <Fragment>
        <div className='mainDivShowDetails'>
            <div className='showDetailsTop'>
                <div className='flex'>
                <div>

                    <div className='movieHead text-slate-50'>
                        <h1>Inception - en</h1>
                    </div>

                    <div className='genreDetails'>
                        <h1>Science fiction/Thriller</h1>
                    </div>
                </div>

                <div className='dateDropdownDiv'>
                    <select  className='bg-slate-600 px-3 py-1 rounded-lg text-white' value={selectedValue} onChange={handleChange}>
                        <option value="">Select a Date</option>
                        <option value="option1">26/4/2023</option>
                        <option value="option2">27/4/2023</option>
                        <option value="option3">28/4/2023</option>
                    </select>
                </div>
                </div>
            </div>
            

            <div className='showDetailsDiv'>
                
            </div>
        </div>
    </Fragment>
  )
}

export default ShowDetails

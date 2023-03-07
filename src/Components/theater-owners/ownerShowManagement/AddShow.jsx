import React from 'react'
import '../../../stylesheets/theater_owners/ownerAddShows.css'

function AddShow() {
  return (
    <div className='mainDivOwner'>
      <div className='addShowsCoreDiv'>
        <div className='addShowsFormDiv'>
          <div className='addShowsHead'>
            <h1 className='text-2xl font-semibold p-7'>Add Shows</h1>
          </div>

          <div className='flex justify-around'>
          <input
          type='text'
          name='theatername'
          placeholder='Theater Name'
          >
          </input>

          <input
          type='text'
          name='Showname'
          placeholder='Showname'
          >
          </input>

          <input
          type='text'
          name='moviename'
          placeholder='Movie Name'
          >
          </input>
          </div>

          <div className='flex justify-around p-10 -ml-14'>
            <input
            type='number'
            name='ticketprice'
            placeholder='Ticket Price'
            ></input>
            <input
            type='Date'
            name='date'
            
            ></input>
            <input
            type='time'
            name='time'
            
            ></input>
          </div>

          <div className='flex justify-around'>
            <input 
            type='text'
            name=''
            ></input>
            <input></input>
            <input></input>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AddShow

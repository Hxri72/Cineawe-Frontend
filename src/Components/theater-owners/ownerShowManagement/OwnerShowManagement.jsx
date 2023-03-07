import React from 'react'
import { Link } from 'react-router-dom'
import '../../../stylesheets/theater_owners/ownerShowManagement.css'

function ShowManage() {
  return (
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
              <th></th>
            </tr>
          </thead>
            
          <tbody>
          <tr>
              <td> </td>
              <td> </td>
              <div className='flex justify-around'>
              <td><button className='border-2 border-slate-800 bg-slate-300 w-24 rounded-md '>Shows</button></td>
              </div>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ShowManage

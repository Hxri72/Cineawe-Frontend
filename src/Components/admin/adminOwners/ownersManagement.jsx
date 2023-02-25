import React, { Fragment, useEffect, useState } from 'react'
import { getAllOwners } from '../../../api_Integration/Admin/admin';

function ManageOwner() {

    const [owners,setOwners] = useState([])

    useEffect(() => {
        const fetchOwner = async () => {
            console.log('working')
          const response = await getAllOwners();
          console.log(response);
          if (response.success) {
            setOwners(response.data);
            
          } else {
            console.log("no users");
          }
        };
        fetchOwner();
      }, []);

  return (
    <Fragment>
    <div className='mainDiv'>
      <div className='maindivInside'>
        <div className='mainContent'>
            <div className='text-white p-12 text-2xl'>
                <h1>Theater Owners</h1>
                
            </div>
            <table className='text-white'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody className='text-white'>
                    {owners.map((owner,index)=>(
                    <tr>
                        <td className='text-center'>{index + 1}</td>
                        <td className='text-center'>{owner.fullname}</td>
                        <td className='text-center'>{owner.email}</td>
                        <td className='text-center'><button className='w-20 h-10 bg-red-600 rounded-md text-slate-300'>Blocked</button></td>
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

export default ManageOwner;

import React, { Fragment, useEffect, useState } from 'react'
import { getAllOwners, ownerStatusChange } from '../../../api_Integration/Admin/admin';

function ManageOwner() {

    const [owners,setOwners] = useState([])

    useEffect(() => {
        const fetchOwner = async () => {
          const response = await getAllOwners();
          
          if (response.success) {
            setOwners(response.data);
            
          } else {
            console.log("no users");
          }
        };
        fetchOwner();
      }, []);

      //dropdown
      const options = ['Pending','Approved', 'Blocked'];  

      const handleOptionChange = async(event) => {
        const ownerStatus = {
          ownerStatus : event.target.value,
          ownerId : event.target.id
        }
        const response = await ownerStatusChange(ownerStatus);
        if(response.success){
          window.location.reload();
        }else{
          console.log('error')
        }
        
       };

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
                        <td className='text-center'>                     
                            <div className='text-black'>                            
                            <select className='rounded-md bg-slate-300' id={owner._id} value={owner.isAdminStatus} onChange={handleOptionChange}>
                              {options.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                              ))}
                            </select>
                            </div>
                        </td>
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

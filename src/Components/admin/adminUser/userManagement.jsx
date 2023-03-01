import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { getAllUsers, unblockUser, userExist } from "../../../api_Integration/Admin/admin";
import Swal from 'sweetalert2'
import 'animate.css'

function ManageUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getAllUsers();
      if (response.success) {
        setUsers(response.data);
      } else {
        console.log("no users");
      }
    };
    fetchUser();
  }, []);

  const handleBlock = (userId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You are blocking a user!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Block!'
    }).then(async(result) => {
      if (result.isConfirmed) {
        const response = await userExist({userId})
        if(response.success){
        Swal.fire(
          'Blocked!',
          'The User is blocked.',
          'success'
        ).then(()=>{
          window.location.reload()
        })

        }
        
      }
    })
  }
  
  const handleUnblock = async(userId) => {
      const response = await unblockUser({userId})
      console.log(response)
      Swal.fire(
        'Unblocked',
        'The User is unblocked',
        'success'
      ).then(()=>{
        window.location.reload()
      })
      
  }

  return (
    <Fragment>
      <div className="mainDiv">
        <div className="maindivInside ">
          <div className="mainContent">
            <div className="text-white text-3xl p-10">Users List</div>
            <table className="text-white">
              <thead>
                <tr>
                  <th >No</th>
                  <th >Name</th>
                  <th >Email</th>
                  <th >Phone</th>
                  <th >Status</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {users.map((user,index)=>(
                  <tr>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{user.firstname}</td>
                    <td className="text-center">{user.email}</td>
                    <td className="text-center">{user.phone}</td>
                    <td className="text-center">
                      {user.isAdminBlocked==='false' ? 
                      <button onClick={()=>handleBlock(user._id)} className="bg-red-600 border-red-600 border-2 w-20  rounded-lg text-slate-200 hover:bg-red-500 hover:border-red-500 transition">Block</button>
                      : <button onClick={()=>handleUnblock(user._id)} className="bg-green-600 border-green-600 border-2 w-20  rounded-lg text-slate-200 hover:bg-green-500 hover:border-green-500 transition">Unblock</button>
                    }
                      </td>
                  </tr> 
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ManageUser;
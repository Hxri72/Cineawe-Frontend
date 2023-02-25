import React, { Fragment, useEffect } from "react";

import { useState } from "react";

import { getAllUsers } from "../../../api_Integration/Admin/admin";


function ManageUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getAllUsers();
      console.log(response);
      if (response.success) {
        setUsers(response.data);
      } else {
        console.log("no users");
      }
    };
    fetchUser();
  }, []);

  return (
    <Fragment>
      <div className="mainDiv">
        <div className="maindivInside">
          <div className="mainContent">
            <div className="text-white text-3xl p-10">Users List</div>
            <table className="text-white ">
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
                    <td className="text-center"><button className="bg-red-600 border-red-600 border-2 w-16  rounded-lg text-slate-200 hover:bg-red-500 hover:border-red-500 transition">Block</button></td>
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
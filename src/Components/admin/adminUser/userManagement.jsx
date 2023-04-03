import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { getAllUsers, unblockUser, userExist } from "../../../api_Integration/Admin/admin";
import Swal from 'sweetalert2'
import 'animate.css'
import { useTable ,usePagination} from 'react-table';
import { useMemo } from "react";

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
    }
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
          setUsers(response.data)
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
        setUsers(response.data)
      })
  }

  const COLUMNS = [
    
    {
        Header:'Name',
        accessor:'firstname'
    },
    {
        Header:'Email',
        accessor:'email'
    },
    {
        Header:'Phone',
        accessor:'phone'
    }
]

const columns = useMemo(()=>COLUMNS,[])
const data = useMemo(()=>users,[users])

const tableInstance = useTable({
  columns,
  data
},
  usePagination
)

const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  page,
  nextPage,
  previousPage,
  prepareRow
} = tableInstance


  return (
    <Fragment>
      <div className="mainDiv">
        <div className="maindivInside ">
          <div className="mainContent">
            <div className="text-white text-3xl p-10">Users List</div>
            <table className="text-white display" id="myTable" {...getTableProps()}>
              <thead>
                {headerGroups && headerGroups.map((headerGroup)=>(
                  
                  <tr {...headerGroup.getHeaderGroupProps()}>
                  <th>No</th>
                  {
                    headerGroup.headers.map((column)=>(
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))
                  }
                  <th>Action</th>
                  </tr>
                ))}
              </thead> 
              <tbody className="text-white" {...getTableBodyProps()}>
                {
                  
                   page.map((row)=>{
                    prepareRow(row)
                    return(
                      <tr {...row.getRowProps()}>
                        <td className="text-center">{+row.id + 1 }</td>
                      {
                        row.cells.map((cell)=>{
                          return  <td className='text-center' {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })
                      }
                      
                      
                      
                      <td className="text-center">
                        {row.original.isAdminBlocked==='false' ? 
                        <button onClick={()=>handleBlock(row.original._id)} className="bg-red-600 border-red-600 border-2 w-20  rounded-lg text-slate-200 hover:bg-red-500 hover:border-red-500 transition">Block</button>
                        : <button onClick={()=>handleUnblock(row.original._id)} className="bg-green-600 border-green-600 border-2 w-20  rounded-lg text-slate-200 hover:bg-green-500 hover:border-green-500 transition">Unblock</button>
                        }
                      </td>
                     
                    </tr> 
                    )
                  })
                }

                
              </tbody>
            </table>
            <div className="text-white flex justify-around p-5">
              <button onClick={()=>previousPage()} className='border-none px-3 py-1 rounded-md bg-slate-800'>Previous</button>
              <button onClick={()=>nextPage()} className='border-none px-3 py-1 rounded-md bg-slate-800'>Next</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ManageUser;
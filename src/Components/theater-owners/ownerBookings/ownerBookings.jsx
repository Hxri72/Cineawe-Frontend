import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux';
import { usePagination, useTable } from 'react-table';
import { getAllBookings } from '../../../api_Integration/Admin/admin';
import { getAllBookingsOwner } from '../../../api_Integration/owner/ownerInstance';

function ManageBooking() {
    const [bookingData,setBookingData] = useState([])
    const {owner} = useSelector((state) => state.owners)
    useEffect(() => {
        const fetchUser = async () => {
          console.log(owner)
          const response = await getAllBookingsOwner({owner:owner});
          console.log(response)
          if (response.success) {
            setBookingData(response.data);
          } else {
            console.log("no users");
          }
        }
        fetchUser();
      }, []);

      const COLUMNS = [
    
        {
            Header:'Name',
            accessor:'user'
        },
        {
            Header:'Movie',
            accessor:'movieName'
        },
        {
            Header:'Theater',
            accessor:'theaterName'
        },
        {
            Header:'Date',
            accessor:'showDate'
        },
        {
            Header:'Time',
            accessor:'showTime'
        },
        {
          Header:'Tickets',
          accessor:'selectedSeats.length'
        },
        {
            Header:'TotalPrice',
            accessor:'totalPrice'
        },
        
    ]

    const columns = useMemo(()=>COLUMNS,[])
    const data = useMemo(()=>bookingData,[bookingData])

    const tableInstance = useTable({
      columns,
      data
    },usePagination)
    
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
        <div className='mainDivOwner'>
            {bookingData.length == 0 ?
             <div className="noShowsHead2">
                <h1 className='text-3xl font-bold text-slate-400'>No Bookings</h1>
            </div>  :

            <>
            <div className='dashboardHead'>
              <h1 className='text-2xl font-semibold'>Bookings</h1>
            </div>

            <table className="text-black display" id="myTable" {...getTableProps()}>
              <thead>
                {headerGroups && headerGroups.map((headerGroup)=>(
                  
                  <tr {...headerGroup.getHeaderGroupProps()}>
                  <th>No</th>
                  {
                    headerGroup.headers.map((column)=>(
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))
                  }
                  </tr>
                ))}
              </thead> 
              <tbody className="text-black" {...getTableBodyProps()}>
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
            </>
            }
        </div>
    </Fragment>
  )
}

export default ManageBooking

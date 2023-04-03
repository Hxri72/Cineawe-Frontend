import React, { Fragment, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import { usePagination, useTable } from 'react-table'
import { deleteMovie, getMovies } from '../../../api_Integration/Admin/admin'
import { getMovieDetails } from '../../../api_Integration/Movie/Movie'
import Swal from 'sweetalert2'

function MovieManage() {
    const navigate = useNavigate()
    const [movies,setMovies] = useState([])
    const handleAddMovie = () => {
        navigate('/admin/admin-add-movies')
    }

    useEffect(()=> {
        const fetchData = async() => {
            const response = await getMovies()
            setMovies(response.data)
        }
        fetchData();
    },[])

    const COLUMNS = [
    
        {
            Header:'Movie Name',
            accessor:'movieName'
        },
        {
            Header:'MovieId',
            accessor:'movieId'
        },
        {
            Header:'language',
            accessor:'movieLanguage'
        }
    ]

    const columns = useMemo(()=>COLUMNS,[])
    const data = useMemo(()=>movies,[movies])

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

      const handleBlock = async(movieId) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You are deleting a movie!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Block!'
        }).then(async(result) => {
          if (result.isConfirmed) {
          const response = await deleteMovie({movieId})
          if(response.success){
          Swal.fire(response.message)
          setMovies(response.data)
        }
      }
      })
    }

  return (
    <Fragment>
        <div className='mainDiv'>
            <div className='maindivInside'>
                <div className='mainContent'>

                    <div className='text-white p-12 text-2xl'>
                        <h1>Movie Management</h1>
                    </div>

                    <div className='flex justify-end pr-10'>
                        <button className='px-3 py-1 bg-slate-300 rounded-lg' onClick={handleAddMovie}>Add Movie</button>
                    </div>

                    <table className="text-white display mt-3" id="myTable" {...getTableProps()}>
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
                         
                        <button onClick={()=>handleBlock(row.original.movieId)} className="bg-red-600 border-red-600 border-2 w-20  rounded-lg text-slate-200 hover:bg-red-500 hover:border-red-500 transition">Delete</button>
                        
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
  )
}

export default MovieManage

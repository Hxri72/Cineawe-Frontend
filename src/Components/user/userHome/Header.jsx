import React, { Fragment } from 'react'
import {useNavigate} from 'react-router-dom'
import applogo from "../../../Assets/user/userSignup/Cineawe.png";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../Redux/usersSlice';

function Header() {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.users)
    const navigate = useNavigate()
  console.log(user);
    const handleLogout = (e) => {
        dispatch(setUser(null))
        localStorage.removeItem("token")
        navigate('/login')
    }
  return (
    <Fragment>

    <div>
        <div className='headerdiv flex'>
            <div className='w-1/4'>
                <img className='w-56' src={applogo} alt='applogo'/>
            </div>
            <div className='w-1/2'>
            <div className='flex items-baseline mt-6 '>
                <input className='headerSearch mr-6 rounded-md px-2' placeholder='Search for Movies'></input>
                <button className='border-solid border-2 border-black bg-black hover:bg-slate-800 h-10 w-1/6 rounded-md text-white'>Search</button>
            </div>
            </div>
            <div className='w-1/3 justify-end grid'>
            {user && <div>
                    <h1 className='text-white mt-2 ml-4'>{user.firstname}</h1>
                </div> }
                <div>
                    <button className='bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded mt-2 mr-6' onClick={handleLogout}>Logout</button>
                </div>
                
            </div>
            
        </div>
        <div className='headerDown'>
            <div className='insideItems flex justify-end py-3'>
                <h1 className='text-slate-200 mr-10 font-sans font-semibold'>Home</h1>
                <h1 className='text-slate-200 font-semibold'>List your bookings</h1>

                <h1>Home</h1>

                <h1>Home</h1>

            </div>

        </div>
     
    </div>
    </Fragment>
  )
}

export default Header

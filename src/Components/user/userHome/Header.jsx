import React from 'react'
import {useNavigate} from 'react-router-dom'
import applogo from "../../../Assets/user/userSignup/Cineawe.png";

function Header() {

    const navigate = useNavigate()

    const handleLogout = (e) => {
        localStorage.removeItem("token")
        navigate('/login')
    }
  return (
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
                <div>
                    <h1 className='text-white mt-2 ml-4'>User</h1>
                </div>
                <div>
                    <button className='bg-black hover:bg-slate-800 text-white font-bold py-2 px-4 rounded mt-2 mr-6' onClick={handleLogout}>Logout</button>
                </div>
                
            </div>
            
        </div>
        <div>

        </div>
     
    </div>
  )
}

export default Header

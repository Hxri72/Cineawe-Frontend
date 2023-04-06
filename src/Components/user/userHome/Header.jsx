import React, { Fragment, useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import applogo from "../../../Assets/user/userSignup/Cineawe.png";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../../Redux/usersSlice';
import { getMovies } from '../../../api_Integration/Admin/admin';


function Header() {
    
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.users)
    const navigate = useNavigate()

    const [inputValue,setInputValue] = useState('')
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = async (e) => {
        try {
          const value = e.target.value;
          setInputValue(value);
          const response = await getMovies();
          setSuggestions(response.data);
        } catch (error) {
          console.log(error);
        }
    }

    const onSearch = (searchTerm,movieId) => {
        setInputValue(searchTerm)
        navigate('/movie-details',{state:movieId})

    }

    const handleLogout = (e) => {
        dispatch(setUser(null))
        localStorage.removeItem("token")
        navigate('/login')
    }

    const handleBookings = (e) => {
        navigate('/list-bookings')
    }

    const handleHome = () => {
        navigate('/')
    }

    

   
  return (
    <Fragment>
    <div>
        <div className='headerdiv flex'>
            <div className='w-1/4'>
                <img className='w-56' src={applogo} alt='applogo'/>
            </div>
            <div className='w-1/2'>
            <div className=' items-baseline mt-6 '>
                <input className='headerSearch mr-6 rounded-md px-2 font-medium' 
                placeholder='Search for movies'
                type="text"
                name="moviename"
                autocomplete="off"
                value={inputValue}
                onChange={(e) => handleInputChange(e)}
                ></input>

                <div className="dropdown w-72 font-medium rounded-md">
                {suggestions
                .filter((item) => {
                const searchTerm = inputValue.toLowerCase();
                const title = item.movieName.toLowerCase();

                return (
                searchTerm &&
                title.startsWith(searchTerm) &&
                title !== searchTerm
                );
                })
                .slice(0, 2)
                .map((suggestion) => (
                <div
                onClick={() => onSearch(suggestion.movieName,suggestion.movieId)}
                className="dropdown-row pl-2"
                key={suggestion.movieName}
                >
                {suggestion.movieName}
                </div>
                ))}
                </div>
            </div>

            </div>
            <div className='w-1/3 justify-end grid'>
            {user && <div>
                    <h1 className='text-white  mt-2 ml-4 font-semibold'>{user.firstname}</h1>
                </div> }
                <div>
                    <button className='bg-black hover:bg-slate-800 text-white font-bold py-1 px-3 rounded mt-2 mr-6' onClick={handleLogout}>Logout</button>
                </div>
                
            </div>
            
        </div>
        <div className='headerDown'>
            <div className='insideItems flex justify-end p-2'>
                <h1 className='text-gray-400 mr-10 font-sans font-semibold text-sm cursor-pointer' onClick={handleHome}>Home</h1>
                <h1 className='text-gray-400 font-semibold text-sm mr-5 cursor-pointer' onClick={handleBookings}>List your bookings</h1>
                <h1 className='text-gray-400 font-semibold text-sm mr-5 cursor-pointer' >Wallet</h1>
            </div>

        </div>
     
    </div>
    </Fragment>
  )
}

export default Header

import React, { Fragment, useState } from 'react'
import { addMovieDetails } from '../../../api_Integration/Admin/admin';
import { getMovieDetailsByName, getMoviename } from '../../../api_Integration/Movie/Movie';
import '../../../stylesheets/admin/adminAddMovie.css'
import Swal from "sweetalert2";
import { useNavigate } from 'react-router';

function AddMovie() {
    const [inputValue, setInputvalue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const navigate = useNavigate()

    const handleInputChange = async (e) => {
        try {
          const value = e.target.value;
          setInputvalue(value);
          const response = await getMoviename(value);
          console.log(response)
          setSuggestions(response.results);
        } catch (error) {
          console.log(error);
        }
    }

    const onSearch = (searchTerm,movieLanguage) => {
        setInputvalue(searchTerm)
    }

    const handleAddMovie = async() => {
        console.log(inputValue)
        const response = await getMovieDetailsByName(inputValue)
        const response2 = await addMovieDetails({movieDetails:response.results[0]})
        console.log(response2)
        if(response2.success){
            Swal.fire(response2.message).then(() => {
                navigate("/admin/admin-movies");
              });
        }else{
            Swal.fire(response2.message)
        }
    }

  return (
    <Fragment>
        <div className='mainDiv'>
            <div className='maindivInside'>
                <div className='mainContent'>
                    <div className='text-white p-12 text-2xl'>
                        <h1>Add Movies</h1>
                    </div>

                    <div className='formDivAddMovie'>
                        <div className='inputForm'>
                            
                            <label className='text-red-600 mt-3'>Enter a movie</label>
                            <div className=''>
                            <input className='py-1 rounded-lg mt-3'
                             type="text"
                             name="moviename"
                             placeholder="Movie Name"
                             autocomplete="off"
                             value={inputValue}
                             onChange={(e) => handleInputChange(e)}
                            ></input>
                            </div>
                            
                            <div className="dropdown w-52 ">
                            {suggestions
                            .filter((item) => {
                            const searchTerm = inputValue.toLowerCase();
                            const title = item.title.toLowerCase();

                            return (
                            searchTerm &&
                            title.startsWith(searchTerm) &&
                            title !== searchTerm
                            );
                            })
                            .slice(0, 3)
                            .map((suggestion) => (
                            <div
                            onClick={() => onSearch(suggestion.title,suggestion.original_language)}
                            className="dropdown-row"
                            key={suggestion.title}
                            >
                            {suggestion.title}
                            </div>
                            ))}
                            </div>

                            <div className='mt-10 px-3 py-1 bg-slate-500 rounded-lg'>
                            <button onClick={handleAddMovie}>Add Movie</button>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default AddMovie

import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import {
  getTheaters,
  postShowData,
} from "../../../api_Integration/owner/ownerInstance";
import "../../../stylesheets/theater_owners/ownerAddShows.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { getMoviename } from "../../../api_Integration/Movie/Movie";
import { useSelector } from "react-redux";

function AddShow() {
  const [theaters, setTheaters] = useState([]);
  const navigate = useNavigate();
  const { owner } = useSelector((state) => state.owners);

  const [theatername, setTheatername] = useState("");
  const [showname, setShowname] = useState("");
  const [ticketprice, setTicketprice] = useState("");
  const [startDate, setStartdate] = useState("");
  const [endDate, setEnddate] = useState("");
  const [showtime, setShowtime] = useState("");
  console.log(theaters)

  const [inputValue, setInputvalue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestions] = useState(false);

  const showData = {
    theatername: theatername,
    showname: showname,
    moviename: inputValue,
    ticketprice: ticketprice,
    startDate:startDate,
    endDate:endDate,
    showtime: showtime,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postShowData({ showData });
    console.log(response);
    if (response.success) {
      Swal.fire(response.message).then(() => {
        navigate("/owner/owner-show-management");
      });
    }
  };

  // function handleDateChange(event) {
  //   const dateValue = event.target.value;
  //   console.log(dateValue)
  //   const formattedDate = formatDate(dateValue);
  //   console.log(formattedDate)
  //   setShowdate(formattedDate);
  // }

  // function formatDate(date) {
  //   const parts = date.split("-");
  //   const year = parts[0];
  //   const month = parts[1];
  //   const day = parts[2];
  //   return `${day}/${month}/${year}`;
  // }

  const handleInputChange = async (e) => {
    try {
      const value = e.target.value;
      setInputvalue(value);
      console.log(value);
      const response = await getMoviename(value);
      console.log(response);
      setSuggestions(response.results);
      setShowSuggestions(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    
    const fetchData = async () => {
      
      const ownerMail = owner.email;
      const response = await getTheaters({ ownerMail: ownerMail });
      if (response.success) {
        setTheaters(response.data);
      }
    };
    fetchData();
  }, []);

  const onSearch = (searchTerm) => {
    setInputvalue(searchTerm);
  };

  console.log(showSuggestion);
  return (
    <Fragment>
      <div className="mainDivOwner">
        <div className="addShowsCoreDiv">
          <div className="addShowsFormDiv">
            <div className="addShowsHead">
              <h1 className="text-2xl font-semibold p-7">Add Shows</h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-3 p-5">
                <div className="px-5 ">
                  <select
                    className="addShowInput w-52"
                    type="text"
                    name="theatername"
                    value={theatername}
                    onChange={(e) => setTheatername(e.target.value)}
                  >
                    <option value="" disabled selected>
                      Select Theater
                    </option>
                    {theaters.map((theater) => (
                      <option>{theater.theaterName}</option>
                    ))}
                  </select>
                </div>
                <div className="">
                
                  <input
                    className="addShowInput"
                    type="text"
                    name="Showname"
                    placeholder="Showname"
                    value={showname}
                    onChange={(e) => setShowname(e.target.value)}
                  ></input>
                </div>

                <div className="">
                  <input
                    className="addShowInput"
                    type="text"
                    name="moviename"
                    placeholder="Movie Name"
                    autocomplete="off"
                    value={inputValue}
                    onChange={(e) => handleInputChange(e)}
                  ></input>

                  <div className="dropdown absolute">
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
                      .slice(0, 5)
                      .map((suggestion) => (
                        <div
                          onClick={() => onSearch(suggestion.title)}
                          className="dropdown-row"
                          key={suggestion.title}
                        >
                          {suggestion.title}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 p-5">

                <div className="px-5">
                <input
                  className="addShowInput w-52"
                  type="number"
                  name="ticketprice"
                  placeholder="Ticket Price"
                  value={ticketprice}
                  onChange={(e) => setTicketprice(e.target.value)}
                ></input>
                </div>

                <div>
                <input
                  className="addShowInput w-56"
                  type="date"
                  name="startDate"
                  value={startDate}
                  onChange={(e) => setStartdate(e.target.value)}
                ></input>
                </div>

                <div>
                <input
                  className="addShowInput w-56"
                  type="date"
                  name="endDate"
                  value={endDate}
                  onChange={(e) => setEnddate(e.target.value)}
                ></input>
                </div>
              </div>

              <div className="grid grid-cols-4 p-5">

                <div className=" px-5">
                <input
                  className="addShowInput"
                  type="time"
                  name="time"
                  value={showtime}
                  onChange={(e) => setShowtime(e.target.value)}
                ></input>
                </div>

              </div>
              <div className="flex justify-evenly my-2">
                <button
                  type="submit"
                  className="border-none w-24 h-9 rounded-md bg-slate-800 text-white hover:bg-slate-900"
                >
                  Add Show
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AddShow;

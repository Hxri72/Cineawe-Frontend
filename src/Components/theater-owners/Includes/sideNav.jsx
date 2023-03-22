import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import ownerImage from '../../../Assets/moderator/ownerHome/Admin-Profile-Vector-PNG-Image.jpg'

function SideNav() {
    const navigate = useNavigate()
    const {owner} = useSelector((state)=>state.owners)

    const logoutOwner = () => {
        try {
            localStorage.removeItem("ownerToken")
            navigate('/owner')
        } catch (error) {
            return error.response
        }
    }

  return (
    <Fragment>
      <div className="sidenavBase">
        <div className="adminlogoDiv">
          <h1 className="appName text-center align-middle">Cineawe</h1>
        </div>

        <div className="profileSection text-center">
          <div className="flex justify-center">
            <div className="profilePhoto">
              <img
                src={ownerImage}
                alt="profilePhoto"
              />
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-lg mt-2">{owner && owner.email}</h1>
          </div>
          <div>
            <h1 className="text-slate-500">Theater Owner</h1>
          </div>
          <hr></hr>
        </div>

        <div className="routeButtonsDiv grid justify-items-center w-full text-start h-1/4 gap-2">
          <div className="route cursor-pointer">
            <Link to={"/owner/owner-Home"}>
              <div>
                <span>Dashboard</span>
              </div>
            </Link>
            
            
          </div>

          <div className="route cursor-pointer">
          <Link to={"/owner/owner-theater-management"}>
            <span>Theater Management</span>
          </Link> 
          </div>

          <div className="route cursor-pointer">
            <Link to={"/owner/owner-show-management"}>
              <span>Show Management</span>
            </Link>
          </div>
          <div className="route">
            <button>Bookings</button>
          </div>
          <div className="route">
            <button>Sales Report</button>
          </div>
          <div className="route">
            <button>Payment</button>
          </div>
        </div>

        <div className="text-center grid py-16">
          <button onClick={logoutOwner}  className="text-slate-500">
            Logout
          </button>
        </div>
      </div>
    </Fragment>
  )
}

export default SideNav

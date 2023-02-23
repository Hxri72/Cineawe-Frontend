import React, { Fragment } from "react";
import { useNavigate, Link } from "react-router-dom";

function Sidenav() {
  const navigate = useNavigate();
  const logoutAdmin = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };
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
                src="https://buffer.com/library/content/images/2020/05/Ash-Read.png"
                alt="profilePhoto"
              />
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-lg mt-2">James Clear</h1>
          </div>
          <div>
            <h1 className="text-slate-500">Admin</h1>
          </div>
          <hr></hr>
        </div>

        <div className="routeButtonsDiv grid justify-items-center w-full text-start h-1/4 gap-2">
          <div className="route">
            <Link to={"/adminhome"}>
              <div>
                <button>Dashboard</button>
              </div>
            </Link>
          </div>

          <div className="route">
            <Link to={"/adminuser"}>
              <button>User Management</button>
            </Link>
          </div>

          <div className="route">
            <button>Owners Management</button>
          </div>
          <div className="route">
            <button>Bookings</button>
          </div>
          <div className="route">
            <button>Show Management</button>
          </div>
          <div className="route">
            <button>Show Management</button>
          </div>
          <div className="route">
            <button>Show Management</button>
          </div>
          <div className="route">
            <button>Show Management</button>
          </div>
          <div className="route">
            <button>Show Management</button>
          </div>
          <div className="route">
            <button>Show Management</button>
          </div>
        </div>

        <div className="text-center grid py-16">
          <button onClick={logoutAdmin} className="text-slate-500">
            Logout
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Sidenav;

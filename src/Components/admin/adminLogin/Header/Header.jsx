import React, { Fragment } from "react";
import applogo from "../../../../Assets/user/userSignup/Cineawe.png";

function Header() {
  return (
    <Fragment>
      <div>
        <div className="applogo ml-auto">
          <img src={applogo} alt="appLogo" />
        </div>
        <div></div>
      </div>
    </Fragment>
  );
}

export default Header;

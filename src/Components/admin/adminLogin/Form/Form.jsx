import React, { Fragment } from "react";
import { useState } from "react";
import { toast } from "react-toast";
import { useNavigate } from "react-router-dom";
import { postAdminHome } from "../../../../api_Integration/Admin/admin";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const adminData = {
    username: username,
    password: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (username === "") {
        return toast.warn("username is required");
      } else if (password === "") {
        return toast.warn("password is required");
      }
      const response = await postAdminHome(adminData);
      console.log(response.data);
      if (response.success) {
        navigate("/admin/adminhome");
        localStorage.setItem("adminToken", response.data);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("catch reached");
    }
  };

  return (
    <Fragment>
      <div>
        <div className="grid lg:flex justify-end">
          <div className="formDiv mt-20 sm:mt-20 md:mt-20 lg:-mt-20">
            <h3 className="text-2xl">Welcome Back!</h3>
            <small>Please enter the Username and Password</small>
            <p></p>
            <form onSubmit={handleSubmit}>
              <input
                className="signupInput"
                placeholder="Username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
              <input
                className="signupInput"
                placeholder="Password"
                name="password"
                type="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>

              <button className="submitbtn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Form;

import React, { useState, useEffect } from "react";
import basestyle from "../Base.module.css";
import loginstyle from "./Login.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
const Login = ({ setUserState }) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const loginHandler = (e) => {
    console.log(e)
    axios.post("http://localhost:3001/", [{name:user.email,
  mobile_number:user.password}]).then((res) => {
        alert(res.data.message);
        // setUserState(res.data.user);
        // navigate("/", { replace: true });
      });
      // setUserDetails({
      //   email: "",
      //   password: "",
      // })
  };

  // useEffect(() => {
  //   if (isSubmit) {
  //     console.log(user);
  //     axios.post("http://localhost:9002/login", user).then((res) => {
  //       alert(res.data.message);
  //       setUserState(res.data.user);
  //       navigate("/", { replace: true });
  //     });
  //   }
  // }, [isSubmit]);
  return (
    <div className={loginstyle.login}>
      <form>
        <h1>New User</h1>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Name"
          onChange={changeHandler}
          value={user.email}
        />
        <p className={basestyle.error}>{formErrors.email}</p>
        <input
          type="text"
          name="password"
          id="password"
          placeholder="Enter Mobile Number"
          onChange={changeHandler}
          value={user.password}
        />
        <p className={basestyle.error}>{formErrors.password}</p>
        <button className={basestyle.button_common} onClick={loginHandler}>
          Submit
        </button>
      </form>
      {/* <NavLink to="/signup">Not yet registered? Register Now</NavLink> */}
    </div>
  );
};
export default Login;

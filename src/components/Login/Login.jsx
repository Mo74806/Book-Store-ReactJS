import React from "react";
import "./Login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/reducer/user";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [loginData, setLoginData] = useState({ user: "", pass: "" });
  const { user } = useSelector((state) => state.userType);
  let navigate = useNavigate();
  let navigateAdmin = () => {
    navigate("/admin");
  };
  useEffect(() => {
    if (user == "admin") {
      navigateAdmin();
    } else if (user == "user") {
      navigate("/home");
    }
  }, [user]);
  //read the books from json server
  const dispatch = useDispatch();

  let handleChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  let handleLogin = () => {
    console.log(loginData);
    if (loginData.user == "admin" && loginData.pass == "adminpass")
      dispatch(userActions.setUser("admin"));
    else if (loginData.user == "user" && loginData.pass == "userpass")
      dispatch(userActions.setUser("user"));
  };

  return (
    <div className="row  py-5 m-0 login-container justify-content-center">
      {" "}
      <div className="col-4 px-4 text-white form py-5 my-5 ">
        <div className="h1 fw-semibold price ">Sign In</div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            name="user"
            type="text"
            className="form-control rounded-pill"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            name="pass"
            type="password"
            className="form-control rounded-pill"
            placeholder="Enter password"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button
            type="submit"
            onClick={handleLogin}
            className=" section-btn rounded-pill"
          >
            Login
          </button>
        </div>
        <p className="text-sm forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </div>
    </div>
  );
}

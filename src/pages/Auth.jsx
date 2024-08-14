import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";

import { getUserApi, registerApi } from "../services/allApi";
import { useDispatch } from "react-redux";
import { user } from "../redux/slices/dashSlice";

function Auth({ register }) {
  const navigate = useNavigate();
  const [registerUser, setRegisterUser] = useState({
    username: "",
    password: "",
    email: "",
  });
  // const [data,setData] = useState([])
  
  const dispatch = useDispatch()

  const handleUpload = async (e) => {
    e.preventDefault();
    const {username,email,password} = registerUser
    if(!username|| !email || !password){
      alert("please fill the form completely")

    }
     else {
      const res = await getUserApi(registerUser)
      const regData = res.data;
      console.log(regData);
      
      if (regData.length > 0) {
        alert("User Already Exist");
      }
      else{
        const result = await registerApi(registerUser);
        if (result.status >= 200 && result.status < 300) {
          alert("Registered Successfully");
          navigate("/login");
        }
      }
    }

    
  };

  const handleCheck = async (e) => {
    e.preventDefault();
    const result = await getUserApi(registerUser);
    const loginData = result.data;

    console.log(loginData);
    
    if (loginData?.length > 0) {
      alert("Login Successful");
       dispatch(user(loginData))
      navigate('/landingpage')


    } else {
      alert("Login Failed");
    }
  };

  return (
    <div className="login bgd_a">
      <form action="" className="login__form shadow">
        <h1 className="login__title text-warning">
          {register ? "Register" : "Login"}
        </h1>

        <div className="login__content">
          {register && (
            <div className="login__box">
              <FontAwesomeIcon icon={faUser} className="login__icon" />

              <div className="login__box-input">
                <input
                  type="text"
                  required
                  className="login__input"
                  id="login-email"
                  placeholder=" "
                  onChange={(e) =>
                    setRegisterUser({
                      ...registerUser,
                      username: e.target.value,
                    })
                  }
                />
                <label htmlFor="login-email" className="login__label">
                  Username
                </label>
              </div>
            </div>
          )}

          <div className="login__box">
            <FontAwesomeIcon icon={faEnvelope} className="login__icon" />

            <div className="login__box-input">
              <input
                type="email"
                required
                className="login__input"
                id="login-email"
                placeholder=" "
                onChange={(e) =>
                  setRegisterUser({ ...registerUser, email: e.target.value })
                }
              />
              <label htmlFor="login-email" className="login__label">
                Email
              </label>
            </div>
          </div>

          <div className="login__box">
            <FontAwesomeIcon icon={faLock} className="login__icon" />

            <div className="login__box-input">
              <input
                type="password"
                required
                className="login__input"
                id="login-pass"
                placeholder=" "
                onChange={(e) =>
                  setRegisterUser({ ...registerUser, password: e.target.value })
                }
              />
              <label htmlFor="login-pass" className="login__label">
                Password
              </label>
            </div>
          </div>
        </div>

        <Link to={"/landingpage"}>
          {register ? (
            <div>
              <button className="login__button" onClick={handleUpload} type="button">
                Register
              </button>
              <p className="pt-3 text-center">
                Already a User? Click here to{" "}
                <Link
                  to={"/login"}
                  className="text-warning"
                  style={{ textDecoration: "none" }}
                >
                  Login
                </Link>
              </p>
            </div>
          ) : (
            <div>

              <button className="login__button" onClick={handleCheck} type="button">

                Login
              </button>
              <p className="pt-3 text-center">
                New User? Click Here to{" "}
                <Link
                  to={"/register"}
                  className="text-warning"
                  style={{ textDecoration: "none" }}
                >
                  Register
                </Link>
              </p>
            </div>
          )}
        </Link>
        {/* <p className="login__register">
          {register ? (
            <>
              Already have an account? <Link to={"/login"}>Login</Link>
            </>
          ) : (
            <>
              Don't have an account? <Link to={"/register"}>Register</Link>
            </>
          )}
        </p> */}
      </form>
    </div>
  );
}

export default Auth;

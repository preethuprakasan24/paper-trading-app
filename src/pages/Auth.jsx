import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { Box, Button, TextField, Typography } from '@mui/material';
import './Auth.css';
import { Link } from 'react-router-dom';


function Auth() {
  const [register, setRegister] = useState(false);

  return (
    <div className="login">
      <form action="" className="login__form">
        <h1 className="login__title">{register ? 'Register' : 'Login'}</h1>

        <div className="login__content">
          <div className="login__box">
            <FontAwesomeIcon icon={faUser} className="login__icon" />

            <div className="login__box-input">
              <input
                type="email"
                required
                className="login__input"
                id="login-email"
                placeholder=" "
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
              />
              <label htmlFor="login-pass" className="login__label">
                Password
              </label>
            </div>
          </div>
        </div>

        <div className="login__check">
          <div className="login__check-group">
            <input
              type="checkbox"
              className="login__check-input"
              id="login-check"
            />
            <label htmlFor="login-check" className="login__check-label">
              Remember me
            </label>
          </div>

          <a href="#" className="login__forgot">
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="login__button">
          {register ? 'Register' : 'Login'}
        </button>

        <p className="login__register">
          {register ? (
            <>Already have an account? <Link onClick={() => setRegister(false)}>Login</Link></>
          ) : (
            <>Don't have an account? <Link onClick={() => setRegister(true)}>Register</Link></>
          )}
        </p>
      </form>
    </div>
  );
}

export default Auth;

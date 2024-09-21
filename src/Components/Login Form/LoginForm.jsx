import React from 'react';
import { FaUserShield,FaLock  } from "react-icons/fa";
export const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='username' required/>
                <FaUserShield className='icon' />
            </div>
            <div className="input-box">
                <input type="password" placeholder='password' required/>
                <FaLock className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox" />Remember me</label>  
                <a href="#">Forgot password?</a>
                
            </div> <br />
            <button type="submit">Login</button>
            <div className="register-link">
                <p>dont have an account? <a href="#">Register</a></p>
            </div>
        </form>
    </div>
  );
};
export default LoginForm;

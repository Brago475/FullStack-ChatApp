import React from "react";
import './form.css'
import LForm from "./LForm";
import { Link } from 'react-router-dom'; 

import { FaUserAlt, FaLock, FaEnvelope} from "react-icons/fa";

const Register = ()  => {
    return (
        <div className='container'>
            <div className='wrapper'>
                <form action="">
                    <h1>Registration</h1>
                    <div className='input-box'>
                        <input type="text" placeholder='Username' required/>
                        <FaUserAlt className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder='Email' required/>
                        <FaEnvelope className='icon'/>
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required/>
                        <FaLock className='icon'/>
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox"/>I agree to the terms and conditions</label>
                    </div>
                    <button type="submit">Register</button>
                    <div className="register-link">
                    <p>Already have an account? <Link to="/">Login</Link></p> {/* Use Link component */}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;

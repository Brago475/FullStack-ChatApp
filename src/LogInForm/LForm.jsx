// LForm.js
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { FaUserAlt, FaLock } from "react-icons/fa";
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import SignIn from "../components/SignIn"; 
import LogOut from "../components/LogOut"; 
import './form.css';
import { auth } from '../firebase'; 


const LForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/MainApp'); 
        } catch (err) {
            setError('Invalid login credentials.');
            console.error('Error during login:', err);
        }
    };

    return (
        <div className="LForm-container">
            <div className='wrapper'>
                <form onSubmit={handleLogin}>
                    <h1>Sign in to Kagu</h1>
                    <div className='input-box'>
                        <input
                            type="email"
                            placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <FaUserAlt className='icon' />
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <FaLock className='icon' />
                    </div>

                    {error && <p className="error">{error}</p>}

                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />Remember me
                        </label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="./Register">Register</a></p>
                    </div>
                </form>
                <div className="divider">
                    <hr />
                    <span>Or</span>
                </div>
                <div className="google-signin">
                    <SignIn />
                </div>
            </div>
        </div>
    );
};

export default LForm;

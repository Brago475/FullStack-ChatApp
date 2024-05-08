import React from "react";
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const style = {
    wrapper: `flex justify-center`,
};

const SignIn = () => {
    const navigate = useNavigate();

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate('/MainApp'); 
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className={style.wrapper}>
            <GoogleButton onClick={googleSignIn} />
        </div>
    );
};

export default SignIn;

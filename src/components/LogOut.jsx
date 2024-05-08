import React from "react"
import {auth} from '../firebase'
import { useNavigate } from 'react-router-dom';




const style = {
    button: `bg-gray-200 px-4 py-2 hover:bg-gray-1oo`
}

const LogOut = () => {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await auth.signOut(); // Log out the user
            navigate('/'); 
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <button onClick={handleSignOut} className={style.button}>
            Log Out
        </button>
    );
};

export default LogOut;
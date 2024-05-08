import React from "react";
import SignIn from './SignIn'
import LogOut from './LogOut'
import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'


import chatAppLogo from './logo.png'; 


const style = {
    
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`,
    logo: `h-full`
}
const Navbar = () => {
    const [user] = useAuthState(auth)
    console.log(user)
    return (
        <div className={style.nav}>
             
         <img src={chatAppLogo} alt="Chat App Logo" className={style.logo} />
        

            <h1 className={style.heading}>Chat App</h1>
            {user ? <LogOut /> : <SignIn />}

            
           

        </div>
    )
}

export default Navbar
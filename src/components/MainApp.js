import React from 'react'
import Navbar from './navbar'
import Chat from './Chat'

import {auth} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'



const style ={
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`,
}

function MainApp() {
const [user] = useAuthState(auth)

//console.log(user)


  return (

    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        
         {/* Chat Component */}
         {user ? <Chat /> : null}

      </section>
    </div>
  
  );
}

export default MainApp;
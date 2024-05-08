
import React from 'react';
import './home.css'
import LForm from '../LogInForm/LForm';



const Homepage = () => {
    
  return (
    <div className="homepage-container">
    {/* Twitter-like header */}
    <header className="header">
        <h1>Welcome to Kagu</h1>
    </header>

   

    {/* Main content with login form */}
    <main className="main-content">
        <LForm />
    </main>
</div>
);
}

export default Homepage;

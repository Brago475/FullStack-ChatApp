// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import Homepage from './Home/Homepage';
import MainApp from './components/MainApp';
import Register from './LogInForm/Register';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
    const [user] = useAuthState(auth);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/MainApp" element={<MainApp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/register" element={<Register />} /> 

              
            </Routes>
        </Router>
    );
}

export default App;



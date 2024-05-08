import React from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import Homepage from './Home/Homepage'
import LForm from './LogInForm/LForm';
import Register from './LogInForm/Register'
import {Homepage} from './Home/Homepage'



function App(){
    return (
        <>
        <HashRouter>
            <Routes>
                <Route path='/Homepage' element={<Homepage/>}/>
            </Routes>
        </HashRouter>
        </>
    )
}
export default App
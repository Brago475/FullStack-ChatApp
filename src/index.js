import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

{/*import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "Homepage",
    element: <HomePage/>,
  },
  {
    path: "Chat",
    element: <Chat/> ,
  },
  {
    path: "LForm",
    element: <LForm/>,
  },
  {
    path: "Register",
    element: <Register/>,
  },
]);
*/}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
    <App />
  </React.StrictMode>
);




{/* app.js
   <BrowserRouter>
 <Routes>
 
            <Route path="Homepage" element={<HomePage />} />
            <Route path="/LForm" element={<LForm />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Chat" element={<Chat/>} />

        </Routes>
*/}
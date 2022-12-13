import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import About from './pages/About';
import Contacto from './pages/Contacto';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<NotFound/>
  },
  {
    path: "/Home",
    element: <Home/>,
    errorElement:<NotFound/>
  },  
  {
    path: "/Contacto",
    element: <Contacto/>,
    errorElement:<NotFound/>
  },    
  {
    path: "/About",
    element: <About/>,
    errorElement:<NotFound/>
  },  
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Pages.jsx/Home';
import About from './Pages.jsx/About';
import { Provider } from 'react-redux';
import { persistor, store } from './Pages.jsx/Redux/store';
import Information from './Pages.jsx/Information';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Home",
    element: <Home/>,
  },  
  {
    path: "/About",
    element: <About/>,
  },  
  {
    path: "/Information",
    element: <Information/>,
  },    
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
        </PersistGate>
      </Provider>    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

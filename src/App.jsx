import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Products from './pages/Products.jsx';
import Error from './pages/Error.jsx';
import Header from "./components/Header.jsx";

import './styles/App.css';


function App() {

  const router = createBrowserRouter([
    {
      path: '/products',
      element: <div><Header/><Products/></div>,
      errorElement: <div><Header/><Error/></div>
    },
    {
      path: '/',
      element: <Navigate to="/products"/>,
      errorElement: <div><Header/><Error/></div>
    },
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App;

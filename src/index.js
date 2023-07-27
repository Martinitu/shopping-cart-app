
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from "./App";
import ShopPage from "./shopPage";
import Home from "./home"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      
      { index: true, element: <Home /> },
      { path: "/shopPage", element: <ShopPage /> },
    ]
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


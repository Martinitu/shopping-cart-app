import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ShopPage from "./shopPage";
import Home from "./home"

const  Router = () => {

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
    return <RouterProvider router={router} />;
};
export default Router;
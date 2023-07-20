import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ShopPage from "./shopPage";
import Home from "./home"

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/shopPage" element={<ShopPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
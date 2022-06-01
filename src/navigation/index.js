import { Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "../pages";
import { Station } from "../pages";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/station" element={<Station />} />
    </Routes>
  );
};

export default index;

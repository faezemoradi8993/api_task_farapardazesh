import { Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "../pages";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default index;

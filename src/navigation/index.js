import { Route, Routes } from "react-router-dom";
import React from "react";
import { Station } from "../pages";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Station />} />
    </Routes>
  );
};

export default index;

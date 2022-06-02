import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color }) => (
  <div className="w-screen h-screen flex items-center justify-center">
    <ReactLoading type={type} color={color} />
  </div>
);

export default Loading;

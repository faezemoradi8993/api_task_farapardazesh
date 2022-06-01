import React from "react";
import "./style.css";

const index = ({ children, variant, classNames }) => {
  var btnClasses = "btn";
  if (variant) btnClasses += ` btn-` + variant;
  if (classNames) btnClasses += classNames;
  
  return <button className={btnClasses}>{children}</button>;
};

index.propTypes = {};

export default index;

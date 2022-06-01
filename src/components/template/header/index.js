import React from "react";
import requsts from "../../../api/station";
import Logo from "../../../assets/logo.svg"

const index = () => {
  requsts.get_matchdata_no_login()
  return (
    <header className="fixed top-0 right-0 w-full h-20 bg-blue-50 shadow-lg  flex items-center">
     <div className="w-full flex items-center justify-between">
       <img src={Logo}/><div className="flex justify-start "></div>
     </div>
    </header>
  );
};

export default index;

import React, { useEffect,useState } from "react";
import requsts from "../../api/station";

const Index = () => {
    const[data,setData]=useState(requsts.report_no_login())
//   useEffect(() => {
//     setData();
//      }, []);
  return <div className="pt-[180px] bg-gray-200">{console.log(data)}</div>;
};

export default Index;

import React from "react";
import requsts from "../../api/station";
const index = () => {
  requsts.report_no_login();
  return (
    <div>
      <h1>home:</h1>
      <div></div>
    </div>
  );
};

export default index;

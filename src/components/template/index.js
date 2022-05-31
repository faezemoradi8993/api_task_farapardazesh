import React from "react";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";

const index = ({ children }) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default index;

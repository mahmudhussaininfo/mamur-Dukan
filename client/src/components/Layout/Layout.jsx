import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Search />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

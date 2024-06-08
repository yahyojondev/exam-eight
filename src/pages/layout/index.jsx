import React from "react";
import SubHeader from "../../components/sub-header/SubHeader";
import Header from "../../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const Layout = () => {
  return (
    <div className="layout">
      <SubHeader />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

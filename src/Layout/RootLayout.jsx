import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Scroll from "../components/Scroll";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content transition-colors duration-300">
      <Scroll />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;

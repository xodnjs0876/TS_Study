import React from "react";
import Header from "../pages/header/header";
import Footer from "../pages/footer/footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

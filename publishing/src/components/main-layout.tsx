import React from "react";
import Header from "../screen/header/header";
import Footer from "../screen/footer/footer";
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

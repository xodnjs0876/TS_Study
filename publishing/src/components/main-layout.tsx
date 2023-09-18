import React from "react";
import Header from "../screen/header/header";
import Footer from "../screen/footer/footer";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function MainLayout() {
  return (
    <>
      <Header />
      <Layout>
        <a href="/">인사말</a>
        <a href="/introduce">소개</a>
        <a href="/chart">조직도</a>
        <a href="/history">연혁</a>
      </Layout>
      <Outlet />
      <Footer />
    </>
  );
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;

  a {
    border: 1px solid #555;
    padding: 10px;
    background: #fff2db;
    text-decoration: none;
    margin-bottom: 50px;
    color: black;
    &:hover {
      color: red;
    }
    &:focus {
      color: red;
    }
  }
`;

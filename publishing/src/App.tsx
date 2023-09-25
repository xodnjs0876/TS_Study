import React from "react";
import { styled } from "styled-components";
import NotisDetail from "./pages/notis/detail/notice-detail";
import Notification from "./pages/notis/notification";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/main-layout";
import Login from "./pages/auth/login";
import KaKaoRedirect from "./pages/auth/kakao";
import { AuthProvider } from "./components/auth/provider";
import { CookiesProvider } from "react-cookie";
import NaverRedirect from "./pages/auth/naver";
import Preowned from "./pages/preowned/preowned";

export default function App() {
  return (
    <CookiesProvider>
      <AuthProvider>
        <Layout>
          <Preowned />
          {/* <Routes>
            <Route Component={MainLayout}>
              <Route path="/" Component={Notification} />
              <Route path="/post/:id" Component={NotisDetail} />
              <Route path="/oauth/" Component={Login} />
            </Route>
            <Route path="/oauth/kakao" Component={KaKaoRedirect} />
            <Route path="/oauth/naver" Component={NaverRedirect} />
          </Routes> */}
        </Layout>
      </AuthProvider>
    </CookiesProvider>
  );
}

const Layout = styled.div`
  body {
    margin: 0px;
    padding: 0px;
  }
`;

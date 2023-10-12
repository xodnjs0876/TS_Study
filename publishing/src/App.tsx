import React from "react";
import { styled } from "styled-components";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import { AuthProvider } from "./components/auth/provider";
import Preowned from "./pages/preowned/preowned";
import ChatDetail from "./pages/preowned/[id]";
// import NotisDetail from "./pages/notis/detail/notice-detail";
// import Notification from "./pages/notis/notification";
// import NaverRedirect from "./pages/auth/naver";
// import KaKaoRedirect from "./pages/auth/kakao";
// import MainLayout from "./components/main-layout";

export default function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/preowned/" Component={Preowned}>
            <Route path="/preowned/:id" Component={ChatDetail} />
          </Route>
        </Routes>
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
  );
}

const Layout = styled.div`
  body {
    margin: 0px;
    padding: 0px;
  }
`;

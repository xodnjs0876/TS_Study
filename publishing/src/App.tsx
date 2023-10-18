import React from "react";
import { styled } from "styled-components";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import { AuthProvider } from "./components/auth/provider";
import Preowned from "./pages/preowned/preowned";
import ChatDetail from "./pages/preowned/[id]";
import { Mobile, Pc } from "./responsive";
import MainLayout from "./components/main-layout";
import NotisDetail from "./pages/notis/detail/notice-detail";
import Notification from "./pages/notis/notification";
// import NotisDetail from "./pages/notis/detail/notice-detail";
// import Notification from "./pages/notis/notification";
// import NaverRedirect from "./pages/auth/naver";
// import KaKaoRedirect from "./pages/auth/kakao";
// import MainLayout from "./components/main-layout";

export default function App() {
  return (
    <AuthProvider>
      <Layout>
        <Mobile>
          <Routes>
            <Route path="/preowned/" Component={Preowned} />
            <Route path="/preowned/:id" Component={ChatDetail} />
          </Routes>
        </Mobile>
        <Pc>
          <Routes>
            <Route path="/preowned/" Component={Preowned}>
              <Route path="/preowned/:id" Component={ChatDetail} />
            </Route>
          </Routes>
        </Pc>
        {/* <Routes>
          <Route Component={MainLayout}>
            <Route path="/" Component={Notification} />
            <Route path="/post/:id" Component={NotisDetail} />
            <Route path="/oauth/" Component={Login} />
          </Route>
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

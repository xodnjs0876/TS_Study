import React from "react";
import { styled } from "styled-components";
import NotisDetail from "./screen/notis/detail/notice-detail";
import Notification from "./screen/notis/notification";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/main-layout";
import Login from "./screen/auth/login";
import KaKaoRedirect from "./screen/auth/kakao";
import { AuthProvider } from "./components/auth/provider";
import { CookiesProvider } from "react-cookie";
import NaverRedirect from "./screen/auth/naver";
import About from "./screen/about";
import Introduce from "./screen/about/introduce";
import Chart from "./screen/about/chart";
import History from "./screen/about/history";
import Test from "./screen/antd";

export default function App() {
  return (
    <Layout>
      <Test />
    </Layout>
    // <CookiesProvider>
    //   <AuthProvider>
    //     <Layout>
    //       <Routes>
    //         <Route Component={MainLayout}>
    //           <Route path="/" Component={About} />
    //           <Route path="/introduce" Component={Introduce} />
    //           <Route path="/chart" Component={Chart} />
    //           <Route path="/history" Component={History} />
    //           {/* <Route path="/" Component={Notification} />
    //           <Route path="/post/:id" Component={NotisDetail} />
    //           <Route path="/oauth/" Component={Login} /> */}
    //         </Route>
    //         {/* <Route path="/oauth/kakao" Component={KaKaoRedirect} />
    //         <Route path="/oauth/naver" Component={NaverRedirect} /> */}
    //       </Routes>
    //     </Layout>
    //   </AuthProvider>
    // </CookiesProvider>
  );
}

const Layout = styled.div`
  body {
    margin: 0px;
    padding: 0px;
  }
`;

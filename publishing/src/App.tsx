import React from 'react';
import { styled } from 'styled-components';
import NotisDetail from './screen/notis/detail/notisDetail';
import Notification from './screen/notis/notification';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './components/mainLayout';

export default function App() {
  return (
    <Layout>
      <Routes>
            <Route Component={MainLayout}>
              <Route path="/" Component={Notification} />
              <Route path='/post/:id' Component={NotisDetail} />
            </Route>
      </Routes>
    </Layout>
  );
}

const Layout = styled.div`
  body {
    margin:0px;
    padding:0px;
  }
`

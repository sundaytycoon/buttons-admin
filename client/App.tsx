import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import {Layout, Menu} from 'antd';
import 'antd/dist/antd.min.css';


import Recoil from 'recoil';

import Home from './pages/Home';


const App:React.FC = () => {
  return (
    <Recoil.RecoilRoot>
      <BrowserRouter>
        <Layout.Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Layout.Header>
        <Routes>
          <Route key={'hi'} path={'/'} children={Home} />
        </Routes>
        <Layout.Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
      </BrowserRouter>
    </Recoil.RecoilRoot>
  );
};

export default App;

import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import 'antd/dist/antd.min.css';
import './index.sass';

import * as Recoil from 'recoil';

import {HomePage} from '@client/pages/Home';
import {Header} from '@client/components/Header';

const App:React.FC = () => {
  return (
    <Recoil.RecoilRoot>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route key={'1'} path={'/'} exact={true} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Recoil.RecoilRoot>
  );
};
export default App;

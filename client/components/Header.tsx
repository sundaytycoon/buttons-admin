import * as React from 'react';

import {Layout, Menu} from 'antd';
import styled from 'styled-components';
import oc from 'open-color';

import {proxyButtonsApi} from '@client/api/proxy';

export const Header:React.FC = () => {
  const [redirectUrls, setRedirectUrls] = React.useState({
    google: '',
    kakao: '',
  });

  const load = React.useCallback(async () => {
    const {data: {redirect_url: redirectUrl}} = await proxyButtonsApi.get('/api/v1/auth/redirect_url');
    setRedirectUrls({
      ...redirectUrls,
      google: redirectUrl,
    });
  }, []);

  React.useLayoutEffect(() => {
    load();
  }, []);

  console.log(redirectUrls.google);

  return (
    <Layout.Header style={{width: '100%'}}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">사용자관라</Menu.Item>
        <Menu.Item key="3">프로필관리</Menu.Item>
        <Menu.Item key="4">앱 설정</Menu.Item>
      </Menu>
      <Authenticator
        href={redirectUrls.google}
      >
        로그인
      </Authenticator>
    </Layout.Header>
  );
};

const Authenticator = styled.a`
  position: absolute;
  right: 0;
  top: 0;
  width: 6rem;
  height: 4rem;
  color: ${oc.gray[1]};
  text-align:center;
  transition: background-color 0.3s;
  &:hover {
    background-color: #1890ff;
  }
`;

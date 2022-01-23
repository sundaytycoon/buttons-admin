import * as React from 'react';

import styled from 'styled-components';
import {
  Layout,
  Breadcrumb,
} from 'antd';

export const HomePage:React.FC = () => {
  return (
    <Layout.Content style={{padding: '0 1rem'}}>
      <Breadcrumb style={{margin: '16px 0'}}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <InnerContent>
        현재 로그인되어있진 않아요
      </InnerContent>
    </Layout.Content>
  );
};


const InnerContent = styled.div`
  padding: 0 1rem;
  min-height: 24rem;
`;

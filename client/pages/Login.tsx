import * as React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

import {
  Layout,
} from 'antd';

export const LoginPage:React.FC = () => {
  return (
    <Layout.Content style={{padding: '0 50px'}}>
      <ErrorLayout>
        <ButtonsWrapper>
          아이아이!
        </ButtonsWrapper>
      </ErrorLayout>
    </Layout.Content>
  );
};

const ErrorLayout = styled.div`
  padding: 1rem;
  min-height: 24rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  background-color: ${oc.red[3]};
  width: 6rem;
  max-width: 24rem;
`;



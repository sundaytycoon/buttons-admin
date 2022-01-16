import React from 'react';

import {
    Layout,
    Menu,
    Breadcrumb,
} from 'antd';

const App:React.FC = () => {
    return (
            <Layout.Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
                    Co
                </div>
            </Layout.Content>
    );
}

export default App;
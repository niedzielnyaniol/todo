import React from 'react';
import { Layout as AntdLayout, Breadcrumb } from 'antd';
import Props from './Layout.types';
import Sider from './components/Sider';

const {
  Header, Footer, Content,
} = AntdLayout;

const Layout = ({ children }: Props): JSX.Element => (
  <AntdLayout style={{ minHeight: '100vh' }}>
    <Sider />
    <AntdLayout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </AntdLayout>
  </AntdLayout>
);

export default Layout;

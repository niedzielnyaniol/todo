import React from 'react';
import { Layout as AntdLayout, Breadcrumb } from 'antd';
import Content from 'components/atoms/Content';
import { FOOTER_ANNOTATION } from 'config';
import Props from './Layout.types';
import Sider from './components/Sider';

const {
  Header, Footer, Content: AntdContent,
} = AntdLayout;

const Layout = ({ children }: Props): JSX.Element => (
  <AntdLayout style={{ minHeight: '100vh' }}>
    <Sider />
    <AntdLayout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <AntdContent style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <Content>
          {children}
        </Content>
      </AntdContent>
      <Footer style={{ textAlign: 'center' }}>{FOOTER_ANNOTATION}</Footer>
    </AntdLayout>
  </AntdLayout>
);

export default Layout;

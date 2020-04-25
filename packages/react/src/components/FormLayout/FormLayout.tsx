import React from 'react';
import { Layout } from 'antd';
import Content from 'components/atoms/Content';
import { FOOTER_ANNOTATION } from 'config';

import Props from './FormLayout.types';

const { Content: AntdContent, Footer } = Layout;

const FormLayout = ({ children }: Props): JSX.Element => (
  <Layout>
    <AntdContent className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <Content>
        {children}
      </Content>
    </AntdContent>
    <Footer style={{ textAlign: 'center' }}>{FOOTER_ANNOTATION}</Footer>
  </Layout>
);

export default FormLayout;

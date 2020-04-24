import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { StyledLogo } from './Sider.styles';
import { APP_NAME } from '../../../../config';

const { SubMenu } = Menu;
const {
  Sider: AntdSider,
} = Layout;

const IS_COLLAPSED_KEY = '__is_collapsed';
const defaultState = JSON.parse(localStorage.getItem(IS_COLLAPSED_KEY) || String(false));

const Sider = () => {
  const [collapsed, setCollapsed] = useState<boolean>(defaultState);

  const toggleCollapsed = () => {
    setCollapsed((prevState) => {
      const value = !prevState;
      localStorage.setItem(IS_COLLAPSED_KEY, JSON.stringify(value));

      return value;
    });
  };

  return (
    <AntdSider collapsible collapsed={collapsed} onCollapse={toggleCollapsed}>
      <StyledLogo>{!collapsed && APP_NAME}</StyledLogo>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <PieChartOutlined />
          <span>Option 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <DesktopOutlined />
          <span>Option 2</span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={(
            <span>
              <UserOutlined />
              <span>User</span>
            </span>
          )}
        >
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={(
            <span>
              <TeamOutlined />
              <span>Team</span>
            </span>
              )}
        >
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9">
          <FileOutlined />
        </Menu.Item>
      </Menu>
    </AntdSider>
  );
};

export default Sider;

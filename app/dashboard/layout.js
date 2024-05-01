'use client'
// layout.js
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  UnorderedListOutlined,
  LogoutOutlined,
  ProjectOutlined,
} from '@ant-design/icons';
import Projects from './projects/page'; 
import Tasks from './tasks/page'; 
import Link from 'next/link';

const { Header, Content, Footer, Sider } = Layout;

const items = [
  { label: 'Projects', key: '1', icon: <ProjectOutlined />, content: <Projects /> },
  { label: 'Tasks', key: '2', icon: <UnorderedListOutlined />, content: <Tasks /> },
  { label: 'Log out', key: '9', icon: <LogoutOutlined /> },
];

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState('1'); // Default to Projects

  const handleMenuClick = ({ key }) => {
    setSelectedKey(key);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" selectedKeys={[selectedKey]} mode="inline" onClick={handleMenuClick}>
          {items.map((item) =>
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          )}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }}><Link className='text-white text-xl p-4' href='/'>Logo</Link></Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>{items.find((item) => item.key === selectedKey).label}</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360 }}>
            {items.find((item) => item.key === selectedKey).content}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

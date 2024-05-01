'use client'
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { HomeOutlined, UserOutlined, LogoutOutlined, LoginOutlined, DashboardOutlined } from '@ant-design/icons';
import MenuItem from 'antd/es/menu/MenuItem';

const { Header } = Layout;

const Navbar = () => {
  const navItems = [
    { key: '1', label: 'Home', icon: <HomeOutlined />, href: '/' },
    { key: '2', label: 'Login', icon: <LoginOutlined />, href: '/login' },
    { key: '3', label: 'Register', icon: <UserOutlined />, href: '/register' },
    { key: '4', label: 'Dashboard', icon: <DashboardOutlined />, href: '/dashboard' },
    { key: '5', label: 'Logout', icon: <LogoutOutlined />, href: '/logout' },
  ];

  return (
    <Header className="bg-gray-900 px-4">
      <div className="flex justify-between items-center">
        <div className="text-white text-xl font-bold">Logo</div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        {navItems.map(item => (
          <MenuItem key={item.key} icon={item.icon}>
            <Link href={item.href}>{item.label}</Link>
          </MenuItem>
        ))}
      </Menu>
      </div>
    </Header>
  );
};

export default Navbar;
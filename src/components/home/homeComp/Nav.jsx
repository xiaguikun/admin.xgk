import React from 'react';
import { Menu } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import menuList from '@/mockDatas/menuConfig.js';

const Nav = () => {
  const { SubMenu } = Menu;

  const handleClick = (e) => {
    console.log('click', e);
  };

  return (
    <div className="nav-box">
      <h1 className="title">TUDOU</h1>
      <Menu onClick={handleClick} mode="vertical" theme="dark">
        {menuList.map((item) => {
          if (item.children) {
            return (
              <SubMenu
                key={item.key}
                icon={<SettingOutlined />}
                title={item.title}
              >
                {item.children.map((ite) => {
                  return <Menu.Item key={ite.key}>{ite.title}</Menu.Item>;
                })}
              </SubMenu>
            );
          } else {
            return <Menu.Item key={item.key}>{item.title}</Menu.Item>;
          }
        })}
      </Menu>
    </div>
  );
};

export default Nav;

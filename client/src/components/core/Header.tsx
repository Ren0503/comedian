import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink, Link } from 'react-router-dom';
import { Menu } from 'antd';

import { logout } from 'actions';
import { AppDispatch } from 'store';
import { ReduxState } from 'types/ReduxState';
import logo from 'assets/logo.png';
import { ActorIcon, HomeIcon, UserIcon } from 'components/icons';

const { SubMenu } = Menu;

const Header = () => {
    const history = useHistory();

    const dispatch = useDispatch<AppDispatch>();
    const { userInfo } = useSelector((state: ReduxState) => state.userLogin);

    const logoutHandler = () => dispatch(logout(() => history.push('/')));

    return (
        <Menu mode="horizontal">
            <Menu.Item key="mail">
                <HomeIcon />
                Home
            </Menu.Item>
            <Menu.Item key="app" disabled>
                <ActorIcon />
            </Menu.Item>
            <SubMenu
                title={
                    <span className="submenu-title-wrapper">
                        <UserIcon/>
                        Users
                    </span>
                }
            >
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
                <Link to="/login"  >
                    Login
                </Link>
            </Menu.Item>
        </Menu>
    )
}

export default Header;
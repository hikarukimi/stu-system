import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {NavLink} from "react-router-dom";


type MenuItem = Required<MenuProps>['items'][number];
export function Header() {
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };
    return (
        <>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            <div style={{marginTop:'5%'}}></div>
        </>
    );
}

const items: MenuItem[] = [
    {
        label: '',
        key:'slogan',
        disabled:true,
        extra:(
            <h1>学生管理系统</h1>
        )
    },
    {
        label: '',
        key: 'home',
        extra: (
            <NavLink to="/home" className={'navigation'}>
                主页
            </NavLink>
        ),
    },
    {
        label: '',
        key: 'about',
        extra: (
            <NavLink to="/about" className={'navigation'}>
                关于我们
            </NavLink>
        ),
    },{
        label: '',
        key: 'add',
        extra: (
            <NavLink to="/add" className={'navigation'}>
                添加学生
            </NavLink>
        ),
    }
];
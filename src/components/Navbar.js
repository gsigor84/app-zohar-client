import React from 'react';
import { Menu } from 'antd';
import {CoffeeOutlined} from '@ant-design/icons';



const { SubMenu } = Menu;

const Navbar =()=>{


        return (

    <Menu

        mode="inline"
    >
                <SubMenu key="menu" icon={<CoffeeOutlined />} title="Menu">
                    <Menu.Item key="home" >
                        <a href='/' >Home</a>
                    </Menu.Item>
                        <Menu.Item key="america" >
                            <a href='/america'>America</a>
                        </Menu.Item>

                        <Menu.Item key="europe">
                            <a href='/europe'>Europe</a>
                        </Menu.Item>


                        <Menu.Item key="Asia">
                            <a href='/asia'>Asia</a>
                        </Menu.Item>
                        <Menu.Item key="About">
                            <a href='/about'>About</a></Menu.Item>

                </SubMenu>




            </Menu>


        )
    }

    export default Navbar;


import React from 'react';
import { Menu } from 'antd';
import {CoffeeOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';



const { SubMenu } = Menu;

const Navbar =()=>{


        return (

    <Menu

        mode="inline"
    >
                <SubMenu key="menu" icon={<CoffeeOutlined />} title="Menu">

                    <Menu.Item key="home" >
                        <Link to={'/'}> Home</Link>
                    </Menu.Item>
                        <Menu.Item key="america" >
                          <Link to={'/america'}> America</Link>
                        </Menu.Item>

                        <Menu.Item key="europe">
                            <Link to={'/europe'}>    Europe</Link>
                        </Menu.Item>


                        <Menu.Item key="Asia">
                            <Link to={'/asia'}>     Asia</Link>
                        </Menu.Item>
                        <Menu.Item key="About">
                            <Link to={'/about'}>    About</Link>
                </Menu.Item>

                </SubMenu>




            </Menu>


        )
    }

    export default Navbar;


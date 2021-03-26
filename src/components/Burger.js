import React, {useState}from 'react'
import {Button} from "antd";
import {MenuUnfoldOutlined} from "@ant-design/icons";
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';

const state = {
    size: 'large',
};



function Burger () {
const[status,setStatus]=useState(false);

let menu

    if(status){
        menu=(
            <nav className={'nav-menu'}>
                <ul className={'nav-item'}>
                    <li className={'nav-link'}>Home</li>
                    <li className={'nav-link'}>USA Trends</li>
                    <li className={'nav-link'}>USA Tech</li>
                    <li className={'nav-link'}>UK Trends</li>
                    <li className={'nav-link'}>UK Tech</li>
                    <li className={'nav-link'}>Germany Trends</li>
                    <li className={'nav-link'}>Germany Tech</li>
                    <li className={'nav-link'}>Indian Trends</li>
                    <li className={'nav-link'}>Indian Tech</li>
                    <li className={'nav-link'}>About</li>

                </ul>
            </nav>
        )

    }

    return(
<div className={'burger'}>
    <Button type="primary"
            onClick={()=>setStatus(!status)}
            icon={<MenuUnfoldOutlined/>} size={state.size}
    >
        MENU
    </Button>
    {menu}



                </div>



        )
  
    
}

export default Burger;
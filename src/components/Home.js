import React from 'react'
import 'antd/dist/antd.css'
import TopFeed from "./TopFeed";
import TechFeed from "./TechFeed";
import {  Divider } from 'antd';




function Home() {


    return (
        <div className={'container_news_padding'}>
            <Divider orientation="left" >Google buisness trends</Divider>


                <TopFeed />
            <Divider orientation="left">Google tech trends</Divider>


                <TechFeed/>



        </div>
    );
}

export default Home;

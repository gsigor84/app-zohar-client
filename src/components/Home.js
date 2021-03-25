import React from 'react'
import 'antd/dist/antd.css'
import TopFeed from "./TopFeed";
import TechFeed from "./TechFeed";




function Home() {


    return (
        <div className={'container_news_padding'}>
                          <TopFeed />

                <TechFeed/>



        </div>
    );
}

export default Home;

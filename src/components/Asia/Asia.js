import React from 'react';
import InTrends from "./InTrends";


const America =()=> {

    const renderAmerica=()=> {
        if (window.location.pathname === "/asia") {

            return (

                <InTrends/>
            )
        }

        if (window.location.pathname === "/intrends") {

            return (

                <InTrends/>
            )
        }


    }


    return (
        <div className={'container_news_padding'}>
            {renderAmerica()}
        </div>
    )

}

export default America;
import React from 'react';
import UsTrends from "./UsTrends";


const America =()=> {

    const renderAmerica=()=> {
        if (window.location.pathname === "/america") {

            return (

                <UsTrends/>
            )
        }

        if (window.location.pathname === "/ustrends") {

            return (

                <UsTrends/>
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
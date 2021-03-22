import React from 'react';
import UkTrends from "./UkTrends";


const Europe =()=> {

    const renderEurope=()=> {
        if (window.location.pathname === "/europe") {

            return (

                    <UkTrends/>
            )
        }

        if (window.location.pathname === "/uktrends") {

            return (

                <UkTrends/>
            )
        }


    }
    return(

        <div className={'container_news_padding'}>

                    {renderEurope()}

        </div>


    )
}

export default Europe;
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { List } from 'antd';



const Wiki =(props)=>{

    const [results,setResults]=useState([]);




    useEffect(() => {
        const search=async()=>{
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:props,
                }
            })

            setResults(data.query.search);

        }
        search()
    },[props])


    const renderResults= results.slice(0, 10).map((result)=>{
        return(

            <div key={result.pageid} >


                <div className={"key_padding"}> <h4 >{result.title}</h4>



                    <List>

                        <List.Item>
                            <span dangerouslySetInnerHTML={{__html: result.snippet}}/>
                        </List.Item>

                    </List>
                </div>
            </div>

        )
    })



    return(
        <div>



            <div>

                {renderResults}

            </div>

        </div>
    )
}

export default Wiki;
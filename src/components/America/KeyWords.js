import React,{Component} from 'react';
import {Space, Button} from 'antd';
import axios from 'axios';
import Wiki from "./Wiki";
import { Divider } from 'antd';




export default class Keywords extends Component {
    constructor(props) {

        super(props);

        this.state = {
            keywords: []

        }
    }

    componentDidMount() {
        axios.get('https://app-zohar.herokuapp.com/usatrendskeys/')

            .then(res => {

                if (res.data.length > 0) {

                    this.setState({keywords: res.data})


                }
            }).catch((err) => {
            console.log(err);
        })


    }






    eutrendsKeys(){

        return(

            <Space size={[8, 16]} wrap >

    {this.state.keywords.map((key)=>
        <Button
            key={key._id}
            value={key.keys}
          onClick={()=> this.setState({keyboard: key.keys})}
        >{key.keys}</Button>
    )}
            </Space >

        )
    }



    render() {
        return (
            <div>

                <div>
                    {this.eutrendsKeys()}

                </div>  <Divider orientation="right">Wikipedia Keywords</Divider>
                <div>
                    <div className={'key_padding'}>
                    <h2 >{this.state.keyboard}</h2></div>
                <Wiki keyboard={this.state.keyboard}/>
            </div>

            </div>
        )
    }

}
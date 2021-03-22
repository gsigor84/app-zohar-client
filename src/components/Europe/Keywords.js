import React,{Component} from 'react';
import {Space, Button} from 'antd';
import axios from 'axios';
import Wiki from "./Wiki";
import { Divider } from 'antd';



export default class Keywords extends Component {
    constructor(props) {

        super(props);

        this.state = {
            keywords: [],
            keywords2:[]

        }
    }



    componentDidMount() {
        axios.get('http://localhost:5000/eutrendskeys/')
            .then(res => {

                if (res.data.length > 0) {
                    this.setState({keywords: res.data})


                }
            }).catch((err) => {
            console.log(err);
        })


        axios.get('http://localhost:5000/eutechskeys/')

            .then(res => {

                if (res.data.length > 0) {

                    this.setState({keywords2: res.data})


                }
            }).catch((err) => {
            console.log(err);
        })


    }

    renderKeystech(){
        if (
            window.location.pathname === "/detech" ||
            window.location.pathname === "/uktech"
        ) {

            return (
                <div>

                    <div>
                        {this.eutechKeys()}

                    </div>  <Divider orientation="right">Wikipedia Keywords Tech</Divider>
                    <div>
                        <div >
                            <h2 >{this.state.keyboard2}</h2></div>
                        <Wiki keyboard={this.state.keyboard2}/>
                    </div>
                </div>

            )
        }
    }

    renderKeystrends(){
        if (
            window.location.pathname === "/detrends" ||
            window.location.pathname === "/uktrends" ||
            window.location.pathname === "/europe"
        ) {

            return (
                <div>

                    <div>
                        {this.euKeys()}

                    </div>  <Divider orientation="right">Wikipedia Keywords Trends</Divider>
                    <div>
                        <div >
                            <h2 >{this.state.keyboard}</h2></div>
                        <Wiki keyboard={this.state.keyboard}/>
                    </div>
                </div>

            )
        }
    }

    euKeys(){

        return(

            <Space size={[8, 16]} wrap>

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

    eutechKeys(){

        return(

            <Space size={[8, 16]} wrap >

                {this.state.keywords2.map((key)=>
                    <Button
                        key={key._id}
                        value={key.keys}
                        onClick={()=> this.setState({keyboard2: key.keys})}
                    >{key.keys}</Button>
                )}
            </Space >

        )
    }


    render() {
        return (
            <div>

                {this.renderKeystech()}
                {this.renderKeystrends()}

            </div>
        )

    }
}
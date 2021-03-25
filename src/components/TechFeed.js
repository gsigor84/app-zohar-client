import React, {Component} from 'react';
import axios from 'axios';
import {Header} from 'semantic-ui-react'
import {Col, Row} from "antd";
import { List } from 'antd';
import {FlagOutlined,LoadingOutlined} from "@ant-design/icons";


export default class TechFeed extends Component {

    constructor(props) {

        super(props);

        this.state = {
            usatechs: [],
            gbtechs:[],
            detechs:[],
            intechs:[],
            loading:false
        }
    }

    componentDidMount(){
        axios.get('https://app-zohar.herokuapp.com/usatechs/')
            .then(res => {
                if (res.data.length > 0 ) {
                    this.setState({usatechs: res.data})
                    this.setState({loading: true})

                }
            }).catch((err) => {
            console.log(err);
        })

        axios.get('https://app-zohar.herokuapp.com/gbtechs/')
            .then(res => {
                if (res.data.length > 0 ) {
                    this.setState({gbtechs: res.data})
                    this.setState({loading: true})

                }
            }).catch((err) => {
            console.log(err);
        })

        axios.get('https://app-zohar.herokuapp.com/detechs/')
            .then(res => {
                if (res.data.length > 0 ) {
                    this.setState({detechs: res.data})
                    this.setState({loading: true})

                }
            }).catch((err) => {
            console.log(err);
        })

        axios.get('https://app-zohar.herokuapp.com/intechs/')
            .then(res => {
                if (res.data.length > 0 ) {
                    this.setState({intechs: res.data})
                    this.setState({loading: true})

                }
            }).catch((err) => {
            console.log(err);
        })

    }






    usaTechs(){

            return(

                <List
                    itemLayout="horizontal"
                    dataSource={this.state.usatechs}
                    renderItem={item => (
                        <List.Item key={item._id}>
                            <List.Item.Meta

                                title={<a href={item.link}>{item.title}</a>}

                            />
                        </List.Item>
                    )}
                />


            )
    }


    gbTechs(){

            return(
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.gbtechs}
                    renderItem={item => (
                        <List.Item key={item._id}>
                            <List.Item.Meta

                                title={<a href={item.link}>{item.title}</a>}

                            />
                        </List.Item>
                    )}
                />

            )

    }

    deTechs(){

            return(
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.detechs}
                    renderItem={item => (
                        <List.Item key={item._id}>
                            <List.Item.Meta

                                title={<a href={item.link}>{item.title}</a>}

                            />
                        </List.Item>
                    )}
                />

            )

    }

    inTechs(){

            return(
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.intechs}
                    renderItem={item => (
                        <List.Item key={item._id}>
                            <List.Item.Meta

                                title={<a href={item.link}>{item.title}</a>}

                            />
                        </List.Item>
                    )}
                />

            )

    }

    usa_date_update(){
        return this.state.usatechs.slice(0,1).map((data)=>{
            return <div key={data._id}>{data.date}</div>
        })
    }
    gb_date_update(){
        return this.state.gbtechs.slice(0,1).map((data)=>{
            return <div key={data._id}>{data.date}</div>
        })
    }
    de_date_update(){
        return this.state.detechs.slice(0,1).map((data)=>{
            return <div key={data._id}>{data.date}</div>
        })
    }
    in_date_update(){
        return this.state.intechs.slice(0,1).map((data)=>{
            return <div key={data._id}>{data.date}</div>
        })
    }



    render() {
        const{loading}=this.state;
        return (
            <div className={'container_news_padding'}>

                <Row>
                <Col span={12}>
                    <div className={'grid_padding'}>
                        <Header as='h4' icon textAlign='right'>

                            <Header.Content  >

                                <h3>  <Header.Content>USA Tech <FlagOutlined /> </Header.Content></h3>

                            </Header.Content>
                        </Header>
                        {loading ? <div/>: <div className="ui active centered inline loader"><LoadingOutlined /></div>}
                        {this.usaTechs()}
                        <h5 className="ui  right aligned  header">
                            <div className="sub header">last update {this.usa_date_update()}</div>
                        </h5>
                    </div>
                </Col>
                    {/*  GB    */}
                    <Col span={12}>
                        <div className={'grid_padding'}>
                            <Header as='h4' icon textAlign='right'>

                                <h3>  <Header.Content>UK Tech <FlagOutlined /> </Header.Content></h3>
                            </Header>

                            {loading ? <div/>:  <div className="ui active centered inline loader"><LoadingOutlined /></div>}
                            {this.gbTechs()}
                            <h5 className="ui  right aligned  header">
                                <div className="sub header">last update {this.gb_date_update()}</div>
                            </h5>
                        </div>
                    </Col>
                </Row>
            {/* proximo    */}
                <Row>
                    <Col span={12}>
                        <div className={'grid_padding'}>
                            <Header as='h4' icon textAlign='right'>

                                <h3>  <Header.Content>Germany Tech  <FlagOutlined /> </Header.Content></h3>
                            </Header>

                            {loading ? <div/>:  <div className="ui active centered inline loader"><LoadingOutlined /></div>}
                            {this.deTechs()}

                            <h5 className="ui  right aligned  header">
                                <div className="sub header">last update {this.de_date_update()}</div>
                            </h5>
                        </div>
                    </Col>


                    <Col span={12}>
                        <div className={'grid_padding'}>
                            <Header as='h4' icon textAlign='right'>

                                <h3>  <Header.Content>Indian Tech <FlagOutlined /> </Header.Content></h3>
                            </Header>
                            {loading ? <div/>: <div className="ui active centered inline loader"><LoadingOutlined /></div>}
                            {this.inTechs()}

                            <h5 className="ui  right aligned  header">
                                <div className="sub header">last update {this.in_date_update()}</div>
                            </h5>
                        </div>
                    </Col>
                </Row>

            </div>
        )
    }
}
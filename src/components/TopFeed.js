import React, {Component,} from 'react';
import axios from 'axios';
import { Header} from 'semantic-ui-react'
import { Row, Col } from 'antd';
import { List} from 'antd';
import {FlagOutlined,LoadingOutlined} from "@ant-design/icons";


export default class TopFeed extends Component {

    constructor(props){

        super(props);

        this.state = {
            usatrends:[],
            gbtrends:[],
            detrends:[],
            intrends:[],
            loading:false

        }
    }

    componentDidMount(){



            axios.get('https://app-zohar.herokuapp.com/usatrends/')
                .then(res => {

                    if (res.data.length > 0 ) {
                        this.setState({usatrends: res.data})
                        this.setState({loading: true})

                    }
                }).catch((err) => {
                console.log(err);
            })


        axios.get('https://app-zohar.herokuapp.com/gbtrends/')
            .then(res =>{
                if (res.data.length > 0){
                    this.setState({gbtrends:res.data})
                    this.setState({loading: true})


                }
            }).catch((err)=>{ console.log(err);})

        axios.get('https://app-zohar.herokuapp.com/detrends/')
            .then(res =>{
                if (res.data.length > 0){
                    this.setState({detrends:res.data})
                    this.setState({loading: true})
                }
            }).catch((err)=>{ console.log(err);})

        axios.get('https://app-zohar.herokuapp.com/intrends/')
            .then(res =>{
                if (res.data.length > 0){
                    this.setState({intrends:res.data})
                    this.setState({loading: true})
                }
            }).catch((err)=>{ console.log(err);})

    }

    usaTrends(){



            return(

            <List
                itemLayout="horizontal"
                dataSource={this.state.usatrends}
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


    gbTrends(){

            return(
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.gbtrends}
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

    deTrends(){

            return(
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.detrends}
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

    inTrends(){

            return(
                <List
                    itemLayout="horizontal"
                    dataSource={this.state.intrends}
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
        return this.state.usatrends.slice(0,1).map((data)=>{
            return <div key={data._id}>{data.date}</div>
        })
    }

    gb_date_update(){
        return this.state.gbtrends.slice(0,1).map((data)=>{
            return <div key={data._id}>{data.date}</div>
        })
    }

    de_date_update(){
        return this.state.detrends.slice(0,1).map((data)=>{
            return <div key={data._id}>{data.date}</div>
        })
    }
    in_date_update(){
        return this.state.intrends.slice(0,1).map((data)=>{
            return <div key={data._id}>{data.date}</div>
        })
    }


    render() {

const{loading}=this.state;
        return (
            //USA

            <div className={'container_news_padding'}>
                <Row>
                    <Col span={12}>
                        <div className={'grid_padding'}>
                        <Header as='h4' icon textAlign='right'>

                            <Header.Content  >

                                <h3>  <Header.Content>USA Trends <FlagOutlined /> </Header.Content></h3>

                            </Header.Content>
                        </Header>
                        {loading ? <div/>: <div className="ui active centered inline loader"><LoadingOutlined /></div>}
                        {this.usaTrends()}
                        <h5 className="ui  right aligned  header">
                            <div className="sub header">last update {this.usa_date_update()}</div>
                        </h5>
                        </div>
                    </Col>
                    {/*gb*/}

                    <Col span={12}>
                        <div className={'grid_padding'}>
                        <Header as='h4' icon textAlign='right'>

                         <h3>  <Header.Content>Uk Ttrends <FlagOutlined /> </Header.Content></h3>
                        </Header>

                        {loading ? <div/>: <div className="ui active centered inline loader"><LoadingOutlined /></div>}
                        {this.gbTrends()}
                        <h5 className="ui  right aligned  header">
                            <div className="sub header">last update {this.gb_date_update()}</div>
                        </h5>
                        </div>
                    </Col>
                </Row>






                <Row>
                    <Col span={12}>
                        <div className={'grid_padding'}>
                        <Header as='h4' icon textAlign='right'>

                            <h3>  <Header.Content>Germany Trends <FlagOutlined /> </Header.Content></h3>
                        </Header>

                        {loading ? <div/>:  <div className="ui active centered inline loader"><LoadingOutlined /></div>}
                        {this.deTrends()}

                        <h5 className="ui  right aligned  header">
                            <div className="sub header">last update {this.de_date_update()}</div>
                        </h5>
                        </div>
                    </Col>


                    <Col span={12}>
                         <div className={'grid_padding'}>
                        <Header as='h4' icon textAlign='right'>

                            <h3>  <Header.Content>Indian Trends <FlagOutlined /> </Header.Content></h3>
                        </Header>
                        {loading ? <div/>:  <div className="ui active centered inline loader"><LoadingOutlined /></div>}
                        {this.inTrends()}

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
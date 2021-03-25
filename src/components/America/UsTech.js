import React, {Component,} from 'react';
import axios from 'axios';
import { Header} from 'semantic-ui-react'
import { Flag} from 'semantic-ui-react'
import {Col, List, Row} from 'antd';
import KeyWords from './KeyWords'
import {LoadingOutlined, RightCircleOutlined} from "@ant-design/icons";

export default class TopFeed extends Component {

    constructor(props) {

        super(props);

        this.state = {
            usatechs: [],
            loading: false

        }
    }

    componentDidMount() {


        axios.get('https://app-zohar.herokuapp.com/usatechs/')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({usatechs: res.data})
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

                            title={<a href={item.link}>

                                <h3>
                                    <div className={'arrow'}>
                                        <RightCircleOutlined />
                                    </div>
                                    <div className={'title'}>
                                        {item.title}
                                    </div>
                                </h3>
                            </a>}

                        />
                    </List.Item>
                )}
            />


        )
    }



    usa2_date_update(){
        return this.state.usatechs.slice(0,1).map((data)=>{
            return <div key={data._id}>{data.date}</div>
        })
    }

    render() {

        const {loading} = this.state;
        return (
            <div className={'container_news_padding'}>

                <Row>
                    <Col span={12}>
                        <div className={'grid_padding'}>
                            <Header as='h4' icon textAlign='right'>

                                <Header.Content>

                                    <Flag name='us'/>

                                </Header.Content>
                            </Header>
                            {loading ? <div/> : <div className="ui active centered inline loader"><LoadingOutlined /></div>}
                            {this.usaTechs()}
                            <h5 className="ui  right aligned  header">
                                <div className="sub header">last update {this.usa2_date_update()}</div>
                            </h5>  </div>
                    </Col>

                    <Col span={12}>
                        <div className={'grid_padding_key'}>

                            <KeyWords></KeyWords>
                        </div>
                    </Col>

                </Row>

            </div>

        )

    }
}
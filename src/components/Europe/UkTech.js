import React, {Component,} from 'react';
import axios from 'axios';
import { Header} from 'semantic-ui-react'
import { Flag} from 'semantic-ui-react'
import {Col, List, Row} from 'antd';
import KeyWords from "./Keywords";
import {RightCircleOutlined} from "@ant-design/icons";

export default class TopFeed extends Component {

    constructor(props) {

        super(props);

        this.state = {
            gbtechs: [],
            loading: false

        }
    }

    componentDidMount() {


        axios.get('https://app-zohar.herokuapp.com/gbtechs/')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({gbtechs: res.data})
                    this.setState({loading: true})

                }
            }).catch((err) => {
            console.log(err);
        })
    }

    gbTechs(){

        return(

            <List
                itemLayout="horizontal"
                dataSource={this.state.gbtechs}
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

    gb_date_update2(){
        return this.state.gbtechs.slice(0,1).map((data)=>{
            return <div key={data._id}>{data.date}</div>
        })
    }

    render() {
        const {loading} = this.state;
        return (
            <div className={'container_news_padding'}>

                    <Row key={'trends bg'}>
                        <Col span={12}>
                            <div className={'grid_padding'}>
                            <Header as='h4' icon textAlign='right'>
                            <Header.Content><Flag name='gb'/></Header.Content>
                            </Header>

                            {loading ? <div/>: <div className="ui active centered inline loader"></div>}
                            {this.gbTechs()}
                            <h5 className="ui  right aligned  header">
                                <div className="sub header">last update {this.gb_date_update2()}</div>
                            </h5>
                            </div>
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

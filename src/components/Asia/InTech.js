import React, {Component,} from 'react';
import axios from 'axios';
import { Header} from 'semantic-ui-react'
import { Flag} from 'semantic-ui-react'
import {Col, List, Row} from 'antd';
import Breadcrumbs from "../Asia/Breadcrumbs";
import KeyWords from "./KeyWords";

export default class InTech extends Component {

    constructor(props) {

        super(props);

        this.state = {
            intechs: [],
            loading: false

        }
    }

    componentDidMount() {

        axios.get('https://app-zohar.herokuapp.com/intechs/')
            .then(res => {
                if (res.data.length > 0) {
                    this.setState({intechs: res.data})
                    this.setState({loading: true})

                }
            }).catch((err) => {
            console.log(err);
        })


    }

    inTechs() {

        return (
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

    in_date_update(){
        return this.state.intechs.slice(0,1).map((data)=>{
            return <div key={data._id}>{data.date}</div>
        })
    }

    render() {
        const{loading}=this.state;
        return (
            <div className={'container_news_padding'}>
                <Breadcrumbs/>
                <Row>
            <Col span={12}>
                <div className={'grid_padding'}>
                    <Header as='h4' icon textAlign='right'>

                        <Header.Content><Flag name='in'/></Header.Content>
                    </Header>
                    {loading ? <div/>: <div className="ui active centered inline loader"></div>}
                    {this.inTechs()}

                    <h5 className="ui  right aligned  header">
                        <div className="sub header">last update {this.in_date_update()}</div>
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

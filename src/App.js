import React, {Component} from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './components/Home'
import America from './components/America/America'
import Europe from './components/Europe/Europe'
import Asia from './components/Asia/Asia'
import About from './components/About'
import { Layout, Menu, Breadcrumb } from 'antd';
import {   DesktopOutlined,    PieChartOutlined,    FileOutlined,    TeamOutlined,UserOutlined} from '@ant-design/icons';
import Transition from "./components/Transition";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


export default class App extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        const {collapsed} = this.state;
        return (

            <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />

                    <Navbar/>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 60 }} >
                        <Transition/>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>Bill</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/home" component={America}/>
                        <Route path="/america" component={America}/>
                        <Route path="/europe" component={Europe}/>
                        <Route path="/asia" component={Asia}/>
                        <Route path="/about" component={About}/>
                    </Switch>
                        </div>
                    </Content>
                </Layout>
            </Layout>
            </Router>
        )
    }
}
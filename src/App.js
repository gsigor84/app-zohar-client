import React,{useState} from 'react'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import Home from './components/Home'
import UsTrends from "./components/America/UsTrends";
import UsTech from "./components/America/UsTech";
import UkTrends from "./components/Europe/UkTrends"
import UkTech from "./components/Europe/UkTech"
import DeTrends from "./components/Europe/DeTrends"
import DeTech from "./components/Europe/DeTech"
import InTrends from './components/Asia/InTrends'
import InTech from './components/Asia/InTech'
import About from './components/About'
import Transition from "./components/Transition"
import Burger from './components/Burger'
import { Layout, Menu} from 'antd';


const { SubMenu } = Menu;
const { Header, Content, Sider, Footer} = Layout;

const state = {
    size: 'large',
};


function App () {



    const[title,setTitle]=useState('Zohar')

        return (

            <Router>
                <Layout>

                    <Burger />
                <Header className="header"  >

                        <Transition title={title}/>

                </Header>


                        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                            <Sider className="site-layout-background" width={200}>
                                <Menu
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    style={{ height: '100%' }}
                                >
                                    <Menu.Item key="11">
                                        <Link to={'/'}
                                              onClick={()=> setTitle('Home')}
                                        >
                                            Home</Link>
                                    </Menu.Item>
                                    <SubMenu key="sub1"  title="America">
                                        <Menu.Item key="1">
                                            <Link to={'/ustrends'}
                                                  onClick={()=> setTitle('USA Trends')}
                                            >USA Trends</Link>
                                        </Menu.Item>
                                        <Menu.Item key="2">
                                            <Link to={'/ustech'}
                                                  onClick={()=> setTitle('USA Tech')}
                                            >USA Tech</Link>
                                        </Menu.Item>

                                    </SubMenu>
                                    <SubMenu key="sub2"  title="Europe">
                                        <Menu.Item key="3">
                                            <Link to={'/uktrends'}
                                                  onClick={()=> setTitle('UK Trends')}
                                            >UK Trends</Link>
                                        </Menu.Item>
                                        <Menu.Item key="4">
                                            <Link to={'/uktech'}
                                                  onClick={()=> setTitle('UK Tech')}
                                            >UK Tech</Link>
                                        </Menu.Item>
                                        <Menu.Item key="5">
                                            <Link to={'/detrends'}
                                                  onClick={()=> setTitle('DE Trends')}
                                            >Germany Trends</Link>
                                        </Menu.Item>
                                        <Menu.Item key="6">
                                            <Link to={'/detech'}
                                                  onClick={()=> setTitle('DE Tech')}
                                            >Germany Tech</Link>
                                        </Menu.Item>
                                    </SubMenu>
                                    <SubMenu key="sub3"  title="Asia">
                                        <Menu.Item key="9">
                                            <Link to={'/intrends'}
                                                  onClick={()=> setTitle('IN Trends')}
                                            >Indian Trends</Link>
                                        </Menu.Item>
                                        <Menu.Item key="10">
                                            <Link to={'/intech'}
                                                  onClick={()=> setTitle('IN Tech')}
                                            >Indian Tech</Link>
                                        </Menu.Item>
                                    </SubMenu>
                                    <Menu.Item key="11">
                                        <Link to={'/about'}
                                              onClick={()=> setTitle('About')}
                                        >
                                        About</Link>
                                    </Menu.Item>
                                                                  </Menu>
                            </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route path="/home" component={Home}/>
                                <Route path="/ustrends" component={UsTrends}/>
                                <Route path="/ustech" component={UsTech}/>
                                <Route path="/uktrends" component={UkTrends}/>
                                <Route path="/uktech" component={UkTech}/>
                                <Route path="/detrends" component={DeTrends}/>
                                <Route path="/detech" component={DeTech}/>
                                <Route path="/intrends" component={InTrends}/>
                                <Route path="/intech" component={InTech}/>
                                <Route path="/about" component={About}/>


                            </Switch>
                </Content>
                        </Layout>

                    <Footer className={'footer'} style={{ textAlign: 'center' }}>©2021 Created by Igor Silva</Footer>
            </Layout>  </Router>
        )
    }
export default App;
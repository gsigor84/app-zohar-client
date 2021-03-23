import React,{Component} from 'react'
import 'semantic-ui-css/semantic.min.css'
import Home from './components/Home'
import NavBar from "./components/Navbar";
import America from './components/America/America'
import { Layout} from 'antd';
import Europe from './components/Europe/Europe'
import UkTech from "./components/Europe/UkTech";
import Transition from './components/Transition'
import UkTrends from "./components/Europe/UkTrends";
import DeTrends from "./components/Europe/DeTrends";
import DeTech from './components/Europe/DeTech'
import UsTrends from "./components/America/UsTrends";
import UsTech from "./components/America/UsTech";
import InTrends from "./components/Asia/InTrends";
import InTech from "./components/Asia/InTech";
import About from "./components/About"
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom'





const{Sider,Content}= Layout;



export default class App extends Component {
    constructor(props) {

        super(props);

        this.state = {
            home: 'home',
            america:'america',
            europe:'europe',
            asia:'asia',
            about:'about'


        }
    }



    render() {
        return (
<Router >
            <Layout style={{background: "white"}}>
                <div className={"banner"}>

                    <Transition/>
                </div>
                <Layout>

                    <Sider style={{background: 'white'}}>
                        <NavBar/>
                    </Sider>

                    <Content style={{background: 'white', padding: '0 50px'}}>

                        <Route path="/">
                            <Home/>
                        </Route>
                        <Switch>
                        <Route path="/america" component={America}/>
                    </Switch>
                        <Route path="/ustrends">
                            <UsTrends/>
                        </Route>
                        <Route path="/ustech">
                            <UsTech/>
                        </Route>
                        <Route path="/europe">
                            <Europe/>
                        </Route>
                        <Route path="/uktrends">
                            <UkTrends/>
                        </Route>
                        <Route path="/detrends">
                            <DeTrends/>
                        </Route>

                        <Route path="/uktech">
                            <UkTech/>
                        </Route>
                        <Route path="/detech">
                            <DeTech/>
                        </Route>
                        <Route path="/asia">
                            <InTrends/>
                        </Route>

                        <Route path="/intrends">
                            <InTrends/>
                        </Route>

                        <Route path="/intech">
                            <InTech/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>

                    </Content>

                </Layout>

            </Layout>
    </Router>
        );
    }

}

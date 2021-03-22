import React,{Component} from 'react'
import 'semantic-ui-css/semantic.min.css'
import Home from './components/Home'
import NavBar from "./components/Navbar";
import America from './components/America/America'
import Route from './components/Route'
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

    state = {
        data: null
    };

    componentDidMount() {
        // Call our fetch function below once the component mounts
        this.callBackendAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
    }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    render() {
        return (

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
                        <Route path="/america">
                            <America/>
                        </Route>
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

        );
    }

}

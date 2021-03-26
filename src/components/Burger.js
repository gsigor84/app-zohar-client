import React, {useState}from 'react'
import {Button} from "antd";
import {MenuUnfoldOutlined} from "@ant-design/icons";
import {Link} from 'react-router-dom'
import {useTransition, animated} from 'react-spring'

const state = {
    size: 'large',
};

function Burger () {

const[status,setStatus]=useState(false);

    const [items] = useState([''])
    const transitions = useTransition(items, item => item.key, {
        from: { transform: 'translate3d(0,-40px,0)' },
        enter: { transform: 'translate3d(0,0px,0)' },
        leave: { transform: 'translate3d(0,-40px,0)' },
    })

let menu

    if(status){
        menu=(
            transitions.map(({ item, props, key }) =>
                <animated.div key={key} style={props}>

            <nav className={'nav-menu'} onClick={()=> setStatus(false)}>
                <ul className={'nav-item'}>
                    <Link  to={'/'} className={'nav-link'}>Home</Link>
                    <Link  to={'/ustrends'} className={'nav-link'}>USA Trends</Link>
                    <Link  to={'/ustech'} className={'nav-link'}>USA Tech</Link>
                    <Link  to={'/uktrends'} className={'nav-link'}>UK Trends</Link>
                    <Link  to={'/uktech'} className={'nav-link'}>UK Tech</Link>
                    <Link  to={'/detrends'} className={'nav-link'}>Germany Trends</Link>
                    <Link  to={'/detech'} className={'nav-link'}>Germany Tech</Link>
                    <Link  to={'/intrends'} className={'nav-link'}>Indian Trends</Link>
                    <Link  to={'/intech'} className={'nav-link'}>Indian Tech</Link>
                    <Link  to={'/about'} className={'nav-link'}>About</Link>

                </ul>
            </nav>
                    {item.text}  </animated.div>
        )
        )

    }

    return(
<div className={'burger'}>
    <Button type="primary"
            onClick={()=>setStatus(!status)}
            icon={<MenuUnfoldOutlined/>} size={state.size}
    >
        MENU
    </Button>
    {menu}

                </div>

        )
  
    
}

export default Burger;
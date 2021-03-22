import {useTransition, animated} from 'react-spring'
import {useState} from 'react'
import {CoffeeOutlined} from '@ant-design/icons'


function Transition() {

    const renderHome=()=>{
        if(window.location.pathname === "/"){

            return transitions.map(({item, props, key}) =>
                <animated.div key={key} style={props}>

                        < p > Zohar<CoffeeOutlined />News

                    </p>
                        {item.text}


                </animated.div>
            )
        }

        if(window.location.pathname === "/america"){

            return transitions.map(({item, props, key}) =>
                <animated.div key={key} style={props}>
                    <p >
                        America<CoffeeOutlined />
                        {item.text}
                    </p>
                </animated.div>
            )
        }

    if(window.location.pathname === "/europe"
        ||window.location.pathname === "/uktrends"
    ||window.location.pathname === "/uktech"
        || window.location.pathname === "/uktrends"
        ||window.location.pathname === "/detrends"
        || window.location.pathname === "/detech"
    ){

        return transitions.map(({item, props, key}) =>
            <animated.div key={key} style={props}>
                <p >
                    Europe<CoffeeOutlined />
                    {item.text}
                </p>
            </animated.div>
        )
    }

    if(window.location.pathname === "/america"
        ||window.location.pathname === "/ustrends"
        ||window.location.pathname === "/ustech"
    ){

        return transitions.map(({item, props, key}) =>
            <animated.div key={key} style={props}>
                <p >
                    America<CoffeeOutlined />
                    {item.text}
                </p>
            </animated.div>
        )
    }

    if(window.location.pathname === "/asia"
        ||window.location.pathname === "/intrends"
        ||window.location.pathname === "/intech"
    ){

        return transitions.map(({item, props, key}) =>
            <animated.div key={key} style={props}>
                <p >
                    Asia<CoffeeOutlined />
                    {item.text}
                </p>
            </animated.div>
        )
    }

        if(window.location.pathname === "/about"

        ){

            return transitions.map(({item, props, key}) =>
                <animated.div key={key} style={props}>
                    <p >
                        About<CoffeeOutlined />
                        {item.text}
                    </p>
                </animated.div>
            )
        }

    }




    const [items] = useState([''])
    const transitions = useTransition(items, item => item.key, {
        from: {transform: 'translate3d(0,-10px,0)'},
        enter: {transform: 'translate3d(0,70px,0)'},
        leave: {transform: 'translate3d(0,-40px,0)'},
    })
       return (
            <div className={'simple-trans-main'}>
                <div>

                {renderHome()}
                </div>
            </div>
        )

}
export default Transition;
import {useTransition, animated} from 'react-spring'
import {useState} from 'react'
import {CoffeeOutlined} from '@ant-design/icons'


function Transition(props) {

    const renderHome = () => {

        return transitions.map(({item, props, key}) =>
            <animated.div key={key} style={props}>

                < p> {title}<CoffeeOutlined/>News

                </p>
                {item.text}


            </animated.div>
        )
    }


    const title = props.title
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
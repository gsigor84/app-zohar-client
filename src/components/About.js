import React from 'react';
import { Image } from 'antd';
import { Row, Col } from 'antd';



function App (){
return(
    <div className={'grid_padding'}>
        <Row justify="space-around" align="middle" gutter={[48, 16]}>
            <Col span={12}>
                <Image
                    width={400}
                    src="1.jpg"
                />
            </Col>

            <Col span={12}>
                <Image
                    width={400}
                    src="3.jpg"
                />
            </Col>
        </Row>
        <Row justify="center" align="middle" >
            <Col span={12}>

                <Image
                       width={400}
                       src="2.jpg"
                />
            </Col>
            <Col span={12}>
                <div className={'about_padding'}>
<h2>Thank you</h2>
                </div>
            </Col>
    </Row>

    </div>

)

}

export default App;
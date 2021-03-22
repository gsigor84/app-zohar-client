import React from 'react';
import { Breadcrumb } from 'antd';
import { FolderOpenOutlined } from '@ant-design/icons';

const Breadcrumbs =()=> {

    return(
        <Breadcrumb>
            <Breadcrumb.Item>
                <a href="/intrends">IN. Trends</a>
            </Breadcrumb.Item>

            <Breadcrumb.Item>
                <a href="/intech">IN. Tech</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                Asia <FolderOpenOutlined />
            </Breadcrumb.Item>

        </Breadcrumb>

    )

}

export default Breadcrumbs;
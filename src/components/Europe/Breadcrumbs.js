import React from 'react';
import { Breadcrumb } from 'antd';
import { FolderOpenOutlined } from '@ant-design/icons';

const Breadcrumbs =()=> {

    return(
        <Breadcrumb>
            <Breadcrumb.Item>
                <a href="/uktrends">UK. Trends</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="/detrends">DE. Trends</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="/uktech">UK. Tech</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="/detech">DE. Tech</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <FolderOpenOutlined />
            </Breadcrumb.Item>

        </Breadcrumb>

    )

}

export default Breadcrumbs;
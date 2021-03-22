import React from 'react';
import { Breadcrumb } from 'antd';
import { FolderOpenOutlined } from '@ant-design/icons';

const Breadcrumbs =()=> {

    return(
        <Breadcrumb>
            <Breadcrumb.Item>
                <a href="/ustrends">Trends</a>
            </Breadcrumb.Item>

            <Breadcrumb.Item>
                <a href="/ustech">Tech</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
               USA <FolderOpenOutlined />
            </Breadcrumb.Item>

        </Breadcrumb>

    )

}

export default Breadcrumbs;
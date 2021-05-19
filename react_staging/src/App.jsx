import React, { Component } from 'react'
import { Button, DatePicker } from 'antd'
// 字体图标在antd的子库下
import { WechatOutlined, SearchOutlined } from '@ant-design/icons';
const { RangePicker } = DatePicker;

export default class App extends Component {
    render() {
        return (
            <div>
                App...
                <Button type="primary">按钮1</Button>
                <button>按钮2</button>
                <Button type="ghost">按钮3</Button>
                <WechatOutlined />
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
                <DatePicker />
                <RangePicker />
            </div>
        )
    }
}

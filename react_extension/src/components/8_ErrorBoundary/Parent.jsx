import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

    state = {
        hasError: ''    // 用于标识子组件是否产生错误
    }

    // 当Parent的子组件出现了任何的报错，都会调用这个钩子，并携带错误信息
    static getDerivedStateFromError(error) {
        console.log(error);
        return { hasError: error }
    }

    componentDidCatch() {
        console.log('统计错误次数，反馈给服务器，用于通知编码人员进行bug的解决');
    }

    render() {
        return (
            <div>
                <h2>我是Parent组件</h2>
                {this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : <Child />}
            </div>
        )
    }
}

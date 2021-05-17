// 引入React核心库
// react使用多种暴露方式，其中还使用了分别暴露的方式来暴露Component。注意不是解构赋值!!!!
import React, { Component } from 'react'
import Hello from './components/Hello'

export default class App extends Component {
    render() {
        return (
            <div>
                <Hello />
            </div>
        )
    }
}

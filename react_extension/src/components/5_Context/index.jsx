import React, { Component } from 'react'
import './index.css'

// 创建Context对象
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext
export default class A extends Component {

    state = { username: 'tom', age: 18 }

    render() {
        const { username, age } = this.state
        return (
            <div className="parent">
                <h3>我是A组件</h3>
                <h4>我的用户名是:{username}</h4>
                {/* 如此写完之后，B组件及B的子组件中写了“static contextType = MyContext”的都可以收到username */}
                {/* 此处只能写value */}
                {/* 只传一个(接收时直接this.context)： */}
                {/* <Provider value={ username }> */}
                {/* 传递多个(使用对象形式,接收时要this.context.xxx)： */}
                <Provider value={{ username, age }}>
                    <B />
                </Provider>
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className="child">
                <h3>我是B组件</h3>
                <C />
            </div>
        )
    }
}

// 类式组件
/* class C extends Component {
    // 声明接收context
    static contextType = MyContext
    render() {
        const { username, age } = this.context
        return (
            <div className="grand">
                <h3>我是C组件</h3>
                <h4>我从A组件接收到的用户名：{username}，年龄是:{age}</h4>
            </div>
        )
    }
} */

// 函数式组件
function C() {
    return (
        <div className="grand">
            <h3>我是C组件</h3>
            <h4>我从A组件接收到的用户名：
            <Consumer>
                    {
                        value => `${value.username}，年龄是:${value.age}`
                    }
                </Consumer>
            </h4>
        </div>
    )
}
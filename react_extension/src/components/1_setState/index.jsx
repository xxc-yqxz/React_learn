import React, { Component } from 'react'

export default class Demo extends Component {
    state = { count: 0 }

    add = () => {
        // 对象式的setState
        /* //1.获取原来的count值
        const { count } = this.state
        //2.更新状态 
        this.setState({ count: count + 1 }, () => {
            console.log('输出2', this.state.count);
        })
        // 由于setState调用后引起的后续步骤是异步操作，所以下行会输出改变之前的count值
        console.log('输出', this.state.count);  // 0 */

        // 函数式的setState
        this.setState((state, props) => {
            console.log(state, props);
            return { count: state.count + 1 }
        })
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
}

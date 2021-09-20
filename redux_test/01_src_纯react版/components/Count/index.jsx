import React, { Component } from 'react'

export default class componentDidMount extends Component {
    state = { count: 0 }
    // 加法
    increment = () => {
        const { value } = this.selectNumber
        const { count } = this.state
        this.setState({ count: count + value * 1 })
    }
    // 减法
    decrement = () => {
        const { value } = this.selectNumber
        const { count } = this.state
        this.setState({ count: count - value * 1 })
    }
    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const { count } = this.state
        if (count % 2 !== 0) {
            this.setState({ count: count + value * 1 })
        }
    }
    // 异步加
    incrementAsync = () => {
        const { value } = this.selectNumber
        const { count } = this.state
        setTimeout(() => {
            this.setState({ count: count + value * 1 })
        }, 1000);
    }
    render() {
        return (
            <div>
                <h1>当前求和为:{this.state.count}</h1>
                {/* 此处的c未select节点 */}
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>奇数+</button>&nbsp;
                <button onClick={this.incrementAsync}>异步+</button>&nbsp;
            </div>
        )
    }
}

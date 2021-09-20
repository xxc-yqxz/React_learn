import React, { Component } from 'react'
// 引入store，用于获取redux中保存的状态
import store from '../../redux/store'

export default class componentDidMount extends Component {
    state = { carName: '奔驰c63' }

    // 此处单独在组件中检测，会导致每一个组件都得写一遍，更好的办法是在入口文件index.js中就写一遍，一劳永逸
    /* componentDidMount() {
        // 检测redux中状态的变化，只要变化，就调用render
        store.subscribe(() => {
            this.setState({})   // thi.setSate({}) 用来更新页面，传一个空对象表示不修改组件内部state
        })
    } */


    // 加法
    increment = () => {
        const { value } = this.selectNumber
        // 通知redux加value
        // redux触发的数据更新不会导致页面重新渲染，需要我们手动渲染
        store.dispatch({ type: 'increment', data: value * 1 })
    }
    // 减法
    decrement = () => {
        const { value } = this.selectNumber
        // 通知redux加value
        // redux触发的数据更新不会导致页面重新渲染，需要我们手动渲染
        store.dispatch({ type: 'decrement', data: value * 1 })
    }
    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        const count = store.getState()
        if (count % 2 !== 0) {
            store.dispatch({ type: 'increment', data: value * 1 })
        }
    }
    // 异步加
    incrementAsync = () => {
        const { value } = this.selectNumber
        setTimeout(() => {
            store.dispatch({ type: 'increment', data: value * 1 })
        }, 1000);
    }
    render() {
        return (
            <div>
                <h1>当前求和为:{store.getState()}</h1>
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

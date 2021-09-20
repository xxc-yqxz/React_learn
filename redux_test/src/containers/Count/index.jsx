import React, { Component } from 'react'
import { increment, decrement, incrementAsync } from '../../redux/actions/count'
import { connect } from 'react-redux'

// 定义UI组件
class Count extends Component {
    state = { carName: '奔驰c63' }
    // 加法
    increment = () => {
        const { value } = this.selectNumber
        this.props.jia(value * 1)
    }
    // 减法
    decrement = () => {
        const { value } = this.selectNumber
        this.props.jian(value * 1)
    }
    // 奇数再加
    incrementIfOdd = () => {
        const { value } = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.jia(value * 1)
        }
    }
    // 异步加
    incrementAsync = () => {
        const { value } = this.selectNumber
        this.props.jiaAsync(value * 1, 500)
    }
    render() {
        // console.log('UI组件接收到的props是：', this.props);
        return (
            <div>
                <h2>我是Count组件,下方组件总人数为:{this.props.personCount}</h2>
                <h4>当前求和为:{this.props.count}</h4>
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

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
    // 此处由于reducer为经过合并的对象，不再是原本单纯的值，所以要用state.count进行对象属性获取
    state => ({ count: state.count, personCount: state.persons.length }),
    {
        jia: increment,
        jian: decrement,
        jiaAsync: incrementAsync
    }
)(Count)

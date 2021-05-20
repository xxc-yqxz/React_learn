// 引入Count的UI组件
import React, { Component } from 'react'
import {
    increment,
    decrement,
    incrementAsync
} from '../../redux/actions/count'

// 引入connect用于连接UI与redux，且connect()()可以生成容器组件
import { connect } from 'react-redux'

// UI组件
class Count extends Component {

    // 不是一个组件要与redux打交道，自己就不能有状态
    state = { name: 'tom' }

    increment = () => {
        //获取用户选择的数字
        const { value } = this.checkNumber
        this.props.increment(value * 1)
    }
    decrement = () => {
        //获取用户选择的数字
        const { value } = this.checkNumber
        this.props.decrement(value * 1)
    }
    incrementIfOdd = () => {
        //获取用户选择的数字
        const { value } = this.checkNumber
        if (this.props.count % 2 !== 0) {
            this.props.increment(value * 1)
        }
    }
    incrementAsync = () => {
        //获取用户选择的数字
        const { value } = this.checkNumber
        this.props.incrementAsync(value * 1)
    }
    render() {
        // console.log('Count的UI组件收到的props是', this.props);
        return (
            <div>
                <h3>我是Count组件,下方组件中人数为:{this.props.personCount}</h3>
                <h4>当前求和为:{this.props.count}</h4>
                <select ref={c => this.checkNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>奇数再+</button>&nbsp;
                <button onClick={this.incrementAsync}>异步+</button>
            </div>
        )
    }
}

// 创建一个容器组件
export default connect(
    // 映射状态
    state => ({
        count: state.count,
        personCount: state.persons.length
    }),
    // 映射操作状态的方法
    /* (dispatch) => ({
        jia: number => dispatch(createIncrementAction(number)),
        jian: number => dispatch(createDecrementAction(number)),
        jiaAsync: number => dispatch(createIncrementAsyncAction(number)),
    }) */
    {
        increment,
        decrement,
        incrementAsync,
    }
)(Count)

// 暴露容器组件
/*
    准备一个容器组件，该组件主要负责：和redux进行数据的交互，可以随意的使用redux的API，和UI组件是父子关系
*/


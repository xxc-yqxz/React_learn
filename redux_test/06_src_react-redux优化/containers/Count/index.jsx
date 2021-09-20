import React, { Component } from 'react'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'
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
                <h1>当前求和为:{this.props.count}</h1>
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
    state => ({ count: state }),

    // mapDispatchToProps的一般写法
    /* dispatch => ({
        jia: number => dispatch(createIncrementAction(number)),
        jian: number => dispatch(createDecrementAction(number)),
        jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
    }) */

    // mapDispatchToProps的简写：
    {
        // 此处只需要给UI组件传递返回action对象的函数，UI组件执行后得到的action对象，react-redux会将其自动分发(dispatch)出去
        // 返回action对象时，react-redux会自动dispatch(action)
        jia: createIncrementAction,
        jian: createDecrementAction,
        // 异步返回的是函数,react-redux会将返回的function作为参数dispatch(function)，相当于调用了function
        jiaAsync: createIncrementAsyncAction
        // 个人理解，只要mapDispatch是对象形式，当UI组件调用键时，react-redux会将其中的每一项的值的返回结果都dispatch一遍。
    }
)(Count)


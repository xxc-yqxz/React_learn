import React, { PureComponent } from 'react'
import './index.css'

// 可以自己写shouldComponentUpdate来判断props、state是否改变，从而判断是否执行更新。
// 但是也可以使用PureComponent，来自动判断，其底层重写了shouldComponentUpdate
export default class Parent extends PureComponent {

    state = { carName: "奔驰c63" }

    changeCar = () => {
        this.setState({ carName: '迈巴赫' })

        // 此种写法导致obj与state是同一个地址，而pureComponent底层做的是浅对比，所以得到两个值一样，shouldComponentUpdate返回false
        // const obj = this.state
        // obj.carName = '迈巴赫'
        // this.setState(obj)
    }

    /* shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props, this.state);    // 目前的props和state
        console.log(nextProps, nextState);  // 接下来要变化的目标props，目标state
        if (this.state.carName === nextState.carName) return false
        else return true
    } */

    render() {
        console.log('Parent--render');
        const { carName } = this.state
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <span>我的车名字是：{carName}</span><br />
                <button onClick={this.changeCar}>点我换车</button>
                <Child carName={carName} />
            </div>
        )
    }
}

class Child extends PureComponent {
    /* shouldComponentUpdate(nextProps, nextState) {
        console.log(this.props, this.state);    // 目前的props和state
        console.log(nextProps, nextState);  // 接下来要变化的目标props，目标state
        return !this.props.carName === nextProps.carName
    } */
    render() {
        console.log('Child--render');
        return (
            <div className="child">
                <h3>我是Child组件</h3>
                {/* <span>我接到的车是：{this.props.carName}</span> */}
            </div>
        )
    }
}
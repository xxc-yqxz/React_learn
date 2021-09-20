import React, { Component } from 'react'
import './index.css'
import C from '../1_setState'

export default class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h3>我是parent组件</h3>
                <A render={(name) => <C name={name} />} />
            </div>
        )
    }
}

class A extends Component {
    state = { name: 'tom' }
    render() {
        const { name } = this.state
        return (
            <div className="a">
                <h3>我是A组件</h3>
                {/* 此种写法类似于vue中的插槽 */}
                {this.props.render(name)}
            </div>
        )
    }
}

class B extends Component {
    render() {
        console.log('B-render');
        return (
            <div className="b">
                <h3>我是B组件,{this.props.name}</h3>
            </div>
        )
    }
}

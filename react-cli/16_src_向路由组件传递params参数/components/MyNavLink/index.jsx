import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        console.log(this.props);    //{to: '/about', children: 'About'}
        return (
            // 由于this.props中有一个children属性包含标签体内容，所以如下写法相当于
            // <NavLink activeClassName="xxc" className="list-group-item" {...this.props}>{this.props.children}</NavLink>
            <NavLink activeClassName="xxc" className="list-group-item" {...this.props} />
        )
    }
}

import React, { Component } from 'react'
import Home from './components/Home'
import About from './components/About'
import { NavLink, Route } from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 注意jsx中的注释 */}
                            {/* 原生html中，我们使用呢a标签进行页面的跳转 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a> */}

                            {/* React中，使用???进行路径的切换 */}
                            {/* NavLink默认点击会自动添加active属性,也可以手动设置activeClassName来进行点击样式设置,只有成功匹配后才会添加 */}
                            <NavLink activeClassName="demo" className="list-group-item" to="/about">About</NavLink>
                            <NavLink activeClassName="demo" className="list-group-item" to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                <Route path="/about" component={About} />
                                <Route path="/home" component={Home} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

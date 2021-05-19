import React, { Component } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test'
import Header from './components/Header'
import { NavLink, Route, Switch } from 'react-router-dom'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header a={1} />
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 注意jsx中的注释 */}
                            {/* 原生html中，我们使用呢a标签进行页面的跳转 */}
                            {/* <a className="list-group-item" href="./about.html">About</a>
                            <a className="list-group-item" href="./home.html">Home</a> */}

                            {/* React中，使用???进行路径的切换 */}
                            {/* NavLink默认点击会自动添加active属性,也可以手动设置activeClassName来进行点击样式设置 */}
                            <NavLink activeClassName="demo" className="list-group-item" to="/xxc/about">About</NavLink>
                            <NavLink activeClassName="demo" className="list-group-item" to="/xxc/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由,添加Switch后使得路由只匹配一次就不继续匹配了 */}
                                <Switch>
                                    <Route path="/xxc/about" component={About} />
                                    <Route path="/xxc/home" component={Home} />
                                    <Route path="/xxc/home" component={Test} /> {/* 该行匹配是失效的，因为开启了Switch */}
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

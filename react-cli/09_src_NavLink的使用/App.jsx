import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom'
import Home from './pages/Home'     // Home是路由组件
import About from './pages/About'
import Header from './components/Header'    // Header是一般组件

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 此处使用NavLick，React会给点击的那个NavLink自动加上active */}
                            {/* NavLink有一个activeClassName属性，可以指定当前的NavLink被点击后加上什么名字的类。不设置默认为active */}
                            <NavLink activeClassName="xxc" className="list-group-item" to="/about">About</NavLink>
                            <NavLink activeClassName="xxc" className="list-group-item" to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Route path="/about" component={About} />
                                <Route path="/home" component={Home} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
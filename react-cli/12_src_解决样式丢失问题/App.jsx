import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'     // Home是路由组件
import About from './pages/About'
import Header from './components/Header'    // Header是一般组件
import MyNavLink from './components/MyNavLink'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 此处的标签体内容，会作为props的children属性传给MyNavLink */}
                            <MyNavLink to="/xxc/about">About</MyNavLink>
                            <MyNavLink to="/xxc/home">Home</MyNavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Switch>
                                    <Route path="/xxc/about" component={About} />
                                    <Route path="/xxc/home" component={Home} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
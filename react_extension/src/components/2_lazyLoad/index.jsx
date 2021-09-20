import React, { Component, lazy, Suspense } from 'react';
import { NavLink, Route } from 'react-router-dom'

// 下面的引入方式会在页面一加载时就引入
// import Home from './Home'
// import About from './About'
import Loading from './Loading'     // 要用组件来实现Suspense组件加载慢时代替，则必须以此种方式引入，不可用懒加载

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

export default class Demo extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                {/* 此处要保证Link和Route标签被同一个Router标签包裹，否则会报错,所以在index.js中用了BrowserRouter包裹了整个<App/> */}
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            <NavLink className="list-group-item" to="/about">About</NavLink>
                            <NavLink className="list-group-item" to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* Suspense用来配置组件未加载完时的代替内容，可以是html标签或组件 */}
                                <Suspense fallback={<Loading />}>
                                    {/* 注册路由 */}
                                    <Route path="/about" component={About} />
                                    <Route path="/home" component={Home} />
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            {/* 此处需要在路由前加/home，否则会去App.jsx中匹配，由于没有一个匹配成功的，所以会跳转到/about */}
                            {/* 而若加了/home，会先去App.jsx中匹配，匹配到了/home（模糊匹配），展示Home组件。之后再进入Home组件中，匹配/home/news，并渲染News组件 */}
                            {/* 此时若在App.jsx中开启了严格匹配，则会导致MyNavLink中的二级匹配失效，因为最开始时匹配就匹配不到 */}
                            <MyNavLink to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/message">Message</MyNavLink>
                        </li>
                    </ul>
                    <div>
                        {/* 注册路由 */}
                        <Switch>
                            <Route path="/home/news" component={News}></Route>
                            <Route path="/home/message" component={Message}></Route>
                            <Redirect to="home/news" />
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}

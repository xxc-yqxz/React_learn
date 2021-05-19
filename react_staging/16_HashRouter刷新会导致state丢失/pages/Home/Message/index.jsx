import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '001', title: '消息1' },
            { id: '002', title: '消息2' },
            { id: '003', title: '消息3' }
        ]
    }

    pushShow = (id, title) => {
        return () => {
            this.props.history.push(`/home/message/detail/${id}/${title}`);
        }
    }

    replaceShow = (id, title) => {
        return () => {
            this.props.history.replace(`/home/message/detail/${id}/${title}`);
        }
    }

    back = () => {
        this.props.history.goBack()
    }

    forword = () => {
        this.props.history.goForward()
    }

    go = () => {
        this.props.history.go(-2)
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* 模板字符串是js语法，故写时要用{}包起来 */}
                                    {/* 跳转路由时携带params参数 */}
                                    {/* <Link replace to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp;
                                    <button onClick={this.pushShow(msgObj.id, msgObj.title)}>push查看</button>
                                    <button onClick={this.replaceShow(msgObj.id, msgObj.title)}>replace查看</button> */}

                                    {/* 跳转路由时携带search参数 */}
                                    {/* <Link to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>&nbsp;&nbsp; */}

                                    {/* 跳转路由时携带state参数,注意此处要写pathname */}
                                    <Link to={{ pathname: `/home/message/detail/${msgObj.id}`, state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link>&nbsp;&nbsp;
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={this.back}>回退</button>
                <button onClick={this.forword}>前进</button>
                <button onClick={this.go}>测试1go</button>
                <hr />
                {/* 此处参数的声明与Detail中的参数的名字相同 */}
                {/* 注册路由时，声明接收params参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

                {/* 注册路由时，如果携带的是search参数，无需声明接收，直接注册即可 */}
                {/* <Route path="/home/message/detail" component={Detail} /> */}

                {/* 注册路由时，如果携带的是state参数，无需声明接收，直接注册即可 */}
                <Route path="/home/message/detail" component={Detail} />
            </div>
        )
    }
}

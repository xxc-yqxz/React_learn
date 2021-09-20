import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', title: '消息1' },
            { id: '02', title: '消息2' },
            { id: '03', title: '消息3' },
        ]
    }

    replaceShow = (id, title) => {
        // 编写一段代码，让其实现跳转到Detail组件，且为replace跳转，携带params参数
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // replace跳转，携带search参数
        // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

        // replace跳转，携带state参数
        this.props.history.replace(`/home/message/detail`, { id, title })
    }

    pushShow = (id, title) => {
        // 编写一段代码，让其实现跳转到Detail组件，且为push跳转，携带params参数
        // this.props.history.push(`/home/message/detail/${id}/${title}`)

        // push跳转，携带search参数
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

        // push跳转，携带state参数
        this.props.history.push(`/home/message/detail`, { id, title })
    }

    forward = () => {
        this.props.history.goForward()
    }

    back = () => {
        this.props.history.goBack()
    }

    go = () => {
        this.props.history.go(-2) // 表示后退两位
    }

    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    {/* 向路由组件传递params参数 */}
                                    <Link to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link>
                                    &nbsp;<button onClick={() => this.pushShow(msgObj.id, msgObj.title)}>push查看</button>&nbsp;&nbsp;
                                    <button onClick={() => this.replaceShow(msgObj.id, msgObj.title)}>replace查看</button>
                                    {/* 向路由组件传递search参数 */}
                                    {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                                    {/* 向路由组件传递state参数 */}
                                    {/* <Link to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</Link> */}
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                {/* 声明接收params参数 */}
                {/* 此处声明后，便可以在路由组件的props.match.params中收到参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail} /> */}

                {/* search参数无需声明接收，正常注册路由即可 */}
                {/* <Route path="/home/message/detail" component={Detail} /> */}

                {/* state参数无需声明接收，正常注册路由即可 */}
                {/* 此种传递方式虽然没有将参数保存在路由中，但是会被浏览器的history记录，所以即便刷新页面，数据也会保存。但是一旦清除浏览器历史记录，数据就会丢失 */}
                <Route path="/home/message/detail" component={Detail} />
                <button onClick={this.back}>回退</button>&nbsp;
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>go</button>
            </div>
        )
    }
}

import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    search = () => {
        const { keyWord } = this
        // 请求之前要:将isLoading变为true，将isFirst变为false
        this.props.updateAppState({ isLoading: true, isFirst: false })

        // 使用axios请求
        axios.get(`http://localhost:3000/search/users?q=${keyWord.value}`).then(
            response => {
                console.log('成功了', response.data)
                // 写箭头函数，则不用担心this指向
                // 请求成功了,存储用户信息，将isLoading变为false
                this.props.updateAppState({ isLoading: false, users: response.data.items })
            },
            error => {
                console.log('失败了', error);
                // 注意对象不能展示到页面上，所以此处要传error.message
                this.props.updateAppState({ isLoading: false, errorMsg: error.message })
            }
        )


    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Github用户搜索案例</h3>
                <div>
                    <input ref={c => this.keyWord = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}

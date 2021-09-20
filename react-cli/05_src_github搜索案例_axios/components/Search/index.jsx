import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    search = () => {
        // 获取用户的输入（连续解构赋值+重命名）
        const { keyWordElement: { value: keyword } } = this  // 此种写法无法直接输出keyWordElement

        // 发送请求前通知App更新状态
        this.props.updateAppState({ isFirst: false, isLoading: true })

        // 发送网络请求
        // 此处由于react运行所处服务器地址与get要发送请求的前缀相同，都是http://localhost:3000，所以可以省略
        axios.get(`/search/users?q=${keyword}`).then(
            response => {
                // 请求成功后通知App更新状态
                this.props.updateAppState({ isLoading: false, users: response.data.items })
            },
            error => {
                // 请求失败后通知App 更新状态
                // 此处要传error.message，不能直接传error，因为react无法直接展示对象
                this.props.updateAppState({ isLoading: false, err: error.message })
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键字点击搜索" />&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}

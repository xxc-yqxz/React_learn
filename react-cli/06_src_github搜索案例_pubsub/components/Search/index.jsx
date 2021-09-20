import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

    search = () => {
        console.log('Search组件发布消息了');
        const { keyWordElement: { value: keyword } } = this

        PubSub.publish('xxc', { isFirst: false, isLoading: true })

        axios.get(`/search/users?q=${keyword}`).then(
            response => {
                PubSub.publish('xxc', { isLoading: false, users: response.data.items })
            },
            error => {
                PubSub.publish('xxc', { isLoading: false, err: error.message })
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

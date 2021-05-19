import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

    search = async () => {
        const { keyWord } = this
        // 请求之前要:将List组件的isLoading变为true，将List组件的isFirst变为false
        // this.props.updateAppState({ isLoading: true, isFirst: false })
        PubSub.publish('update_list_state', { isLoading: true, isFirst: false })

        /* axios.get(`http://localhost:3000/search/users?q=${keyWord.value}`).then(
            response => {
                console.log('成功了', response.data)
                // 写箭头函数，则不用担心this指向
                // 请求成功了,存储用户信息，将List组件的isLoading变为false
                // this.props.updateAppState({ isLoading: false, users: response.data.items })
                PubSub.publish('update_list_state', { isLoading: false, users: response.data.items })
            },
            error => {
                console.log('失败了', error);
                // 注意对象不能展示到页面上，所以此处要传error.message
                // 请求失败了要：存储错误信息，将List组件的isLoading变为false
                // this.props.updateAppState({ isLoading: false, errorMsg: error.message })
                PubSub.publish('update_list_state', { isLoading: false, errorMsg: error.message })
            }
        ) */
        /*const x =  fetch(`http://localhost:3020/search/users?q=${keyWord.value}`)
            .then(
                response => {
                    console.log('联系服务器成功了', response)
                    return response.json()
                },
                // error => {
                //     console.log('联系服务器失败了', error);
                //     // return Promise.reject(error)
                //     return new Promise(() => { })
                // }
            )
            .then(
                response => { console.log('数据获取成功了', response) },
                // error => { console.log('数据获取失败了', error) }
            ).catch(
                error => console.log('请求失败', error)
            ) */
        try {
            const response = await fetch(`http://localhost:3010/search/users?q=${keyWord.value}`)

            const result = await response.json()
            console.log(result);
        } catch (error) {
            console.log('失败了', error);
        }

        try {
            const response = await axios(`http://localhost:3010/search/users?q=${keyWord.value}`)
            console.log(response.data)
        } catch (error) {
            console.log('失败了', error);
        }
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

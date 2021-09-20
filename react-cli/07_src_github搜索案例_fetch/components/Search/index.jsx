import React, { Component } from 'react'
import PubSub from 'pubsub-js'
// import axios from 'axios'

export default class Search extends Component {

    search = async () => {
        console.log('Search组件发布消息了');
        const { keyWordElement: { value: keyword } } = this

        PubSub.publish('xxc', { isFirst: false, isLoading: true })

        // 使用axios发送网络请求
        //#region 
        /* axios.get(`/search/users2?q=${keyword}`).then(
            response => {
                PubSub.publish('xxc', { isLoading: false, users: response.data.items })
            },
            error => {
                PubSub.publish('xxc', { isLoading: false, err: error.message })
            }
        ) */
        //#endregion

        // 发送网络请求---使用fetch发送（未优化）
        /* fetch(`/search/users2?q=${keyword}`).then(
            // response自身没有响应要获取的数据，需要response.json()返回一个promise对象，其内部保存着你想要的数据
            response => { console.log('联系服务器成功了'); return response.json() },   // 此处返回的promise实例(response.json()会作为.then()返回的promise实例) 
            // 此次要联系服务器失败的话，除非断网之类的。其只要端口有开着，就会联系成功
            error => {
                console.log('联系服务器失败了', error);
                return new Promise(() => { });
            }     // 此处若联系服务器失败，也会返回一个非promise值undefined，则会走到下一个.then的response中，输出"'获取数据成功了' undefined"。所以需要中断Promise链，让其无法再往下走
        ).then(
            // 上一个.then返回了一个promise实例，根据这个promise实例可以进行数据获取
            response => { console.log('获取数据成功了', response) },
             error => { console.log('获取数据失败了', error) }
        ) */

        // 发送网络请求---使用fetch发送（已优化）
        try {
            const response = await fetch(`/search/users2?q=${keyword}`)
            const data = await response.json()
            PubSub.publish('xxc', { isLoading: false, users: data.items })
        } catch (error) {
            PubSub.publish('xxc', { isLoading: false, err: error.message })
        }
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

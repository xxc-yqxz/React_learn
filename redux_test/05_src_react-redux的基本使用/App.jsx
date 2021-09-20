import React, { Component } from 'react'
import Count from './containers/Count'  // 此处要改成引入containers中的Count容器组件
import store from './redux/store'


export default class App extends Component {

    render() {
        return (
            <div>
                {/* 给容器组件传递store */}
                <Count store={store} />
            </div>
        )
    }
}

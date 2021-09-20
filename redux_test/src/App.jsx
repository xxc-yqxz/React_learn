import React, { Component } from 'react'
import Count from './containers/Count'  // 此处要改成引入containers中的Count容器组件
import Person from './containers/Person'  // 此处要改成引入containers中的Person容器组件

export default class App extends Component {

    render() {
        return (
            <div>
                <Count />
                <hr />
                <Person />
            </div>
        )
    }
}

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDOM.render(<App />, document.getElementById('root'))

// 检测redux中状态的改变
store.subscribe(() => {
    // 此处因为diffing算法存在，故每次只更新发生改变的元素
    ReactDOM.render(<App />, document.getElementById('root'))
})
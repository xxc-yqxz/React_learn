import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    // Provider:1.可以为所有的容器组件批量传递store。2.能帮助监测
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))
// 引入React核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 此时已经不用引入babel。
// 引入App组件(App是所有组件的外壳组件，它包裹所有的组件)
// 在教手架中，只有两种文件可以省略:.js、.jsx
import App from './App'

// 渲染App组件
ReactDOM.render(<App />, document.getElementById('root'))

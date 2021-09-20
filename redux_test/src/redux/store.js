// 引入applyMiddleware，用于包裹中间件，执行异步任务
import { createStore, applyMiddleware } from 'redux'

// 引入汇总之后的reducer
import reducer from './reducers'

// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

// 暴露store
export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
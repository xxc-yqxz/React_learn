/* 
    该问价专门用于暴露一个store对象，整个应用只有一个store对象
*/

// 引入applyMiddleware，用于包裹中间件，执行异步任务
import { createStore, applyMiddleware, combineReducers } from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
// 引入为Person组件服务的reducer
import personReducer from './reducers/person'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

// 引入combineReducers，合并reducer，确保其为对象形式，以便获取
const allReducer = combineReducers({
    count: countReducer,
    persons: personReducer
})

export default createStore(allReducer, applyMiddleware(thunk))


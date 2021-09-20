/* 
    该文件用于汇总所有的reducer为一个总的reducer
*/
// 引入combineReducers，合并reducer
import { combineReducers } from 'redux'
// 引入为Count组件服务的reducer
import count from './count'
// 引入为Person组件服务的reducer
import person from './person'

// 汇总所有的reducer变为一个总的reducer
export default combineReducers({
    count: count,
    persons: person
})
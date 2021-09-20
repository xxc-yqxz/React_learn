/*
    该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from './constant'

// 此处要写小括号，否则返回值简写形式若返回对象时，对象的{}会被认为是函数体
export const createIncrementAction = data => ({ type: INCREMENT, data })

export const createDecrementAction = data => ({ type: DECREMENT, data })
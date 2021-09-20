/*
    该文件专门为Count组件生成action对象
*/
import { INCREMENT, DECREMENT } from './constant'
// import store from './store'

// 同步action，就是指action的值为Object类型的一般对象
export const createIncrementAction = data => ({ type: INCREMENT, data })

export const createDecrementAction = data => ({ type: DECREMENT, data })

// 所谓的异步action,就是指action的值为函数，异步action中一般都会调用同步action，异步action不是必须要用的。
export const createIncrementAsyncAction = (data, time) => {
    // 由于函数是由store调用的，其会传入一个dispatch，所以就不用store.dispatch()的写法，而是可以直接dispatch()
    return (dispatch) => {
        // 此处返回的函数被包裹在组件中的store.dispatch()方法中，所以store会帮忙调用。
        setTimeout(() => {
            // store.dispatch(createIncrementAction(data))
            dispatch(createIncrementAction(data))
        }, time);
    }
}
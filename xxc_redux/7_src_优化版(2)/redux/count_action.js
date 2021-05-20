/* 
    该文件是专门用于创建Count组件相关的action
*/
import { INCREMENT, DECREMENT } from './constant'
import store from './store'


// 直接写{} 会被认为是函数体，所以要包()
export const createIncrementAction = number => ({ type: INCREMENT, data: number })
export const createDecrementAction = number => ({ type: DECREMENT, data: number })

export function createIncrementAsyncAction(number) {
    // 异步action中，往往都会开启一个同步action
    // 此时会自动传入一个dispatch
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(number))
        }, 500)
    }
}
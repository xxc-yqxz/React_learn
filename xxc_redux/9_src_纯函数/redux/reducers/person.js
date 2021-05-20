import { ADD_PERSON } from '../constant'
console.log('@--personReducer')

const initState = [{ id: '001', name: 'xxc', age: 18 }]
export default function (preState = initState, action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON:
            /* preState.unshift(data)
            console.log(preState)
            return preState */
            return [data, ...preState]
        default:
            return preState
    }
}
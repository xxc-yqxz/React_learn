import { createStore, applyMiddleware, combineReducers } from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

const allReducer = combineReducers({
    count: countReducer,
    persons: personReducer
})

export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))


import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const rootReducer = (state = {} , action) => {
   return state
}

const middlewares = [
    thunkMiddleware
]

export default function (preloadedState) {

    return createStore(rootReducer, preloadedState, applyMiddleware(...middlewares))
}
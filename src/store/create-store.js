import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducer'
import canUseDOM from 'can-use-dom'



const middlewares = [
    thunkMiddleware
]

const preloadedState = function(){
    if(canUseDOM){
        const payload = window.sessionStorage.getItem("payload") || "{}";
        return payload && JSON.parse(payload)
    }
}

export default function () {
    const store = createStore(rootReducer, preloadedState(), applyMiddleware(...middlewares))
    store.subscribe(() => {
         window.sessionStorage.setItem("payload", JSON.stringify(store.getState()))
    })

    return store
}
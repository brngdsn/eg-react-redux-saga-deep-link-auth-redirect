import { createStore, combineReducers, applyMiddleware } from 'redux'
import { todos, visibilityFilter } from './reducers'
import stateData from './initialState'

const storeFactory = (initialState=stateData) =>
    applyMiddleware()(createStore)(
        combineReducers({ todos, visibilityFilter })
    )

export default storeFactory
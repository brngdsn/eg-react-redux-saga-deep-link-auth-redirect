import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  busyTodos: ['data'],
  idleTodos: ['data'],
  toggleTodos: ['data'],
  removeTodos: ['data'],
  addTodos: ['payload'],
  todosRequest: ['data'],
  todosSuccess: ['payload'],
  todosFailure: null
})

export const TodosTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Selectors ------------- */

export const TodosSelectors = {
  getTodos: state => {
    const todos = state.todos.payload ? state.todos.payload : []
    return [...todos]
      .sort((a, b) => b.id - a.id)
  },
  getData: state => state.data
}

/* ------------- Reducers ------------- */

export const busy = (state, { data }) =>
  state.merge({ payload: state.payload.map(todo => {
    if (todo.id === data.id) {
      return {
        ...todo,
        busy: true
      }
    } else {
      return todo
    }
  })})

export const idle = (state, { data }) =>
  state.merge({ payload: state.payload.map(todo => {
    if (todo.id === data.id) {
      return {
        ...todo,
        busy: false
      }
    } else {
      return todo
    }
  })})

export const add = (state, { payload }) =>
  state.merge({ payload: [...state.payload, payload] })

export const remove = (state, { data }) =>
  state.merge({
    payload: state.payload.filter(t => t.id !== data.id)
  })

export const toggle = (state, { data }) =>
  state.merge({ payload: state.payload.map(p => {
    if (p.id === data.id) {
      return {
        ...p,
        done: data.done
      }
    } else {
      return p
    }
  })})

export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload: payload.map(todo => {
    return {
      ...todo,
      busy: false
    }
  }) })
}

export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.BUSY_TODOS]: busy,
  [Types.IDLE_TODOS]: idle,
  [Types.TOGGLE_TODOS]: toggle,
  [Types.REMOVE_TODOS]: remove,
  [Types.ADD_TODOS]: add,
  [Types.TODOS_REQUEST]: request,
  [Types.TODOS_SUCCESS]: success,
  [Types.TODOS_FAILURE]: failure
})
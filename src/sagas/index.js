import { takeLatest, takeEvery, all } from 'redux-saga/effects'
import TodosAPI from '../services/TodosApi'

/* ------------- Types ------------- */

import { TodosTypes } from '../redux/TodosRedux'
import { AddTodosTypes } from '../redux/AddTodosRedux'
import { RemoveTodosTypes } from '../redux/RemoveTodosRedux'
import { ToggleTodosTypes } from '../redux/ToggleTodosRedux'

/* ------------- Sagas ------------- */

import { getTodos } from './TodosSagas'
import { addTodos } from './AddTodosSagas'
import { removeTodos } from './RemoveTodosSagas'
import { toggleTodos } from './ToggleTodosSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const todosApi = TodosAPI.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(TodosTypes.TODOS_REQUEST, getTodos, todosApi),
    takeLatest(AddTodosTypes.ADD_TODOS_REQUEST, addTodos, todosApi),
    takeEvery(RemoveTodosTypes.REMOVE_TODOS_REQUEST, removeTodos, todosApi),
    takeEvery(ToggleTodosTypes.TOGGLE_TODOS_REQUEST, toggleTodos, todosApi)
  ])
}
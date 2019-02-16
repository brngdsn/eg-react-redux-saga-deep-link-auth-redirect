import { call, put } from 'redux-saga/effects'
import AddTodosActions from '../redux/AddTodosRedux'
import TodosActions from '../redux/TodosRedux'

export function * addTodos (api, action) {
  const { data } = action

  const response = yield call(api.postTodos, data)

  if (response.ok) {
    yield put(AddTodosActions.addTodosSuccess(response.data))
    yield put(TodosActions.addTodos(response.data))
  } else {
    yield put(AddTodosActions.addTodosFailure())
  }
}
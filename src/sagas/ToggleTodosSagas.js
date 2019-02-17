import { call, put } from 'redux-saga/effects'
import ToggleTodosActions from '../redux/ToggleTodosRedux'
import TodosActions from '../redux/TodosRedux'

export function * toggleTodos (api, action) {
  const { data } = action

  yield put(TodosActions.busyTodos(data))

  const response = yield call(api.patchTodos, data)

  if (response.ok) {
    yield put(ToggleTodosActions.toggleTodosSuccess(response.data))
    yield put(TodosActions.toggleTodos(data))
    yield put(TodosActions.idleTodos(data))
  } else {
    yield put(ToggleTodosActions.toggleTodosFailure())
    yield put(TodosActions.idleTodos(data))
  }
}
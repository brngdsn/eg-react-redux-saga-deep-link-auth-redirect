import { call, put } from 'redux-saga/effects'
import RemoveTodosActions from '../redux/RemoveTodosRedux'
import TodosActions from '../redux/TodosRedux'

export function * removeTodos (api, action) {
  const { data } = action

  yield put(TodosActions.busyTodos(data))

  const response = yield call(api.deleteTodos, data)

  if (response.ok) {
    yield put(RemoveTodosActions.removeTodosSuccess(response.data))
    yield put(TodosActions.removeTodos(data))
    yield put(TodosActions.idleTodos(data))
  } else {
    yield put(RemoveTodosActions.removeTodosFailure())
    yield put(TodosActions.idleTodos(data))
  }
}
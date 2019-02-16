import { call, put } from 'redux-saga/effects'
import TodosActions from '../redux/TodosRedux'

export function * getTodos (api, action) {
  const { data } = action
  const response = yield call(api.getTodos, data)

  if (response.ok) {
    yield put(TodosActions.todosSuccess(response.data))
  } else {
    yield put(TodosActions.todosFailure())
  }
}
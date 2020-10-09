import { call, put } from 'redux-saga/effects'
import SessionActions from '../redux/SessionRedux'

export function * sessionRequestSaga (api, action) {
  const { data } = action

  try {
    const response = yield call(api.getSession, data)
    console.log(response)
    if (response.ok) {
      yield put(SessionActions.sessionSuccess(response.data))
    } else {
      yield put(SessionActions.sessionFailure(response))
    }
  } catch (error) {
    console.log(error)
    yield put(SessionActions.sessionFailure(error))
  }
}
import { call, put } from 'redux-saga/effects'
import AuthenticationActions from '../redux/AuthenticationRedux'

export function * authenticationRequestSaga (api, action) {
  const { data } = action
  console.log('auth saga', action)
  try {
    const response = yield call(api.postAuthentication, data)
    console.log('auth req response', response)
    if (response.ok) {
      yield put(AuthenticationActions.authenticationSuccess(response.data))
    } else {
      yield put(AuthenticationActions.authenticationFailure(response))
    }
  } catch (error) {
    console.log(error)
    yield put(AuthenticationActions.authenticationFailure(error))
  }
}
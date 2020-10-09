import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  authenticationRequest: ['data'],
  authenticationSuccess: ['payload'],
  authenticationFailure: null
})

export const AuthenticationTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  // what's included in the request
  data: null,
  fetching: null,
  // what's included in the response
  payload: null,
  error: null
})

/* ------------- Selectors ------------- */

export const AuthenticationSelectors = {
  getData: state => state.data,
  selectAuthenticated: state => {
    console.log(state)
    return state.authentication.payload ? state.authentication.payload.authenticated : null
  }
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTHENTICATION_REQUEST]: request,
  [Types.AUTHENTICATION_SUCCESS]: success,
  [Types.AUTHENTICATION_FAILURE]: failure
})
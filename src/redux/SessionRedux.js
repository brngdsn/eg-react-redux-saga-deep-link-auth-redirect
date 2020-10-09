import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  sessionRequest: ['data'],
  sessionSuccess: ['payload'],
  sessionFailure: null
})

export const SessionTypes = Types
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

export const SessionSelectors = {
  getData: state => state.data,
  selectToken: state => {
    console.log(state)
    return state.session.payload ? state.session.payload.token : null
  }
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  console.log('session success', action)
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SESSION_REQUEST]: request,
  [Types.SESSION_SUCCESS]: success,
  [Types.SESSION_FAILURE]: failure
})
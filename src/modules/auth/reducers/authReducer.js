import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CLEAR_AUTH_ERRORS,
} from '@modules/auth/actionTypes/authActionTypes'
import { Map } from 'immutable'

export const initialState = Map({
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token') ? true : false,
})

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CLEAR_AUTH_ERRORS:
      return state
        .set('error', null)
    case SIGN_UP_REQUEST:
      return state
        .set('isFetching', true)
        .set('isAuthenticated', false)
        .set('user', payload.userData)
    case SIGN_UP_SUCCESS:
      return state
        .set('isFetching', false)
        .set('isAuthenticated', true)
        .set('user', payload.userData)
    case SIGN_UP_FAILURE:
      return state
        .set('isFetching', false)
        .set('isAuthenticated', false)
        .set('error', payload.error)
    case LOGIN_REQUEST:
      return state
        .set('isFetching', true)
        .set('isAuthenticated', false)
        .set('user', payload.creds)
    case LOGIN_SUCCESS:
      return state
        .set('isFetching', false)
        .set('isAuthenticated', true)
        .set('user', payload.userData)
    case LOGIN_FAILURE:
      return state
        .set('isFetching', false)
        .set('isAuthenticated', false)
        .set('error', payload.error)
    case LOGOUT:
      return state
        .set('isFetching', false)
        .set('isAuthenticated', false)
    default:
      return state
  }
}

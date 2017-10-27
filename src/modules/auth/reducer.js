import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CLEAR_AUTH_ERRORS,
  SET_USER_DATA,
  SETTINGS_EDIT_REQUEST,
  SETTINGS_EDIT_SUCCESS,
  SETTINGS_EDIT_FAILURE,
} from '@modules/auth/actionTypes'
import { Map } from 'immutable'
import JWT from 'jwt-client'

const checkToken = () => {
  const token = localStorage.getItem('token')
  if (token) {
    try {
      if (JWT.validate(token)) {
        return true
      }
    } catch (err) {
      return false
    }
  }
  return false
}

export const initialState = Map({
  isEditing: false,
  isFetching: false,
  isAuthenticated: checkToken(),
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
    case SET_USER_DATA:
      return state
        .set('user', payload.userData)
    case SETTINGS_EDIT_REQUEST:
      return state
        .set('isEditing', true)
    case SETTINGS_EDIT_SUCCESS:
      return state
        .set('isEditing', false)
        .set('user', payload.userData)
    case SETTINGS_EDIT_FAILURE:
      return state
        .set('isEditing', false)
        .set('error', payload.error)
    default:
      return state
  }
}

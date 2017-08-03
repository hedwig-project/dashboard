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
import { unauthenticatedPost } from '@config/axios'

export const clearAuthErrors = () => ({
  type: CLEAR_AUTH_ERRORS,
})

const requestSignUp = userData => ({
  type: SIGN_UP_REQUEST,
  payload: {
    userData,
  },
})

const signUpSuccess = userData => ({
  type: SIGN_UP_SUCCESS,
  payload: {
    userData,
  },
})

const signUpFailure = error => ({
  type: SIGN_UP_FAILURE,
  payload: {
    error,
  },
})

export const signUp = data => ((dispatch) => {
  dispatch(requestSignUp(data))

  // this is needed as API expects birthday in US date format,
  // but birthday from form comes in BR date format
  if (data.birthday) {
    const birthdayPieces = data.birthday.split('/')
    data.birthday = birthdayPieces[1] + '/' + birthdayPieces[0] + '/' + birthdayPieces[2]
  }

  return unauthenticatedPost('user/register', data)
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      dispatch(signUpSuccess(response))
    })
    .catch((error) => {
      dispatch(signUpFailure(error.data.message))
    })
})

function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds,
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token,
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  }
}

const receiveLogout = () => ({
  type: LOGOUT,
  isFetching: false,
  isAuthenticated: false,
})

export const logoutUser = () => ((dispatch) => {
  localStorage.removeItem('token')
  dispatch(receiveLogout())
})

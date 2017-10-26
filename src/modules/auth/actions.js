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
import { unauthenticatedPost, authenticatedGet, authenticatedPut } from '@config/axios'
import JWT from 'jwt-client'

const normalizeToken = (token) => {
  const splittedToken = token.split(' ')
  return splittedToken[splittedToken.length - 1]
}

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
    // eslint-disable-next-line no-param-reassign
    data.birthday = `${birthdayPieces[1]}/${birthdayPieces[0]}/${birthdayPieces[2]}`
  }

  return unauthenticatedPost('/users', data)
    .then((response) => {
      localStorage.setItem('token', normalizeToken(response.data.response.token))
      dispatch(signUpSuccess(response))
      return true
    })
    .catch((error) => {
      dispatch(signUpFailure(error.data.message))
      return false
    })
})

const requestLogin = creds => ({
  type: LOGIN_REQUEST,
  payload: {
    creds,
  },
})

const loginSuccess = userData => ({
  type: LOGIN_SUCCESS,
  payload: {
    userData,
  },
})

const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: {
    error,
  },
})

export const login = creds => ((dispatch) => {
  dispatch(requestLogin(creds))

  return unauthenticatedPost('/users/authenticate', creds)
    .then((response) => {
      localStorage.setItem('token', normalizeToken(response.data.response.token))
      dispatch(loginSuccess(response.data.response.user))
      return true
    })
    .catch((error) => {
      const data = error.data
      let message = ''
      if (data) {
        message = data.message
      }
      dispatch(loginFailure(message || 'Erro no login'))
      return false
    })
})

const receiveLogout = () => ({
  type: LOGOUT,
  isFetching: false,
  isAuthenticated: false,
})

export const logout = () => ((dispatch) => {
  localStorage.removeItem('token')
  dispatch(receiveLogout())
})

const setUserData = userData => ({
  type: SET_USER_DATA,
  payload: { userData },
})

export const getUserData = () => ((dispatch) => {
  const token = localStorage.getItem('token')
  const decodedToken = JWT.read(token)

  return authenticatedGet('/users/profile', token)
    .then((response) => {
      dispatch(setUserData({ ...response.data.response.user, ...decodedToken.claim }))
      return true
    })
    .catch(() => false)
})

const settingsEditRequest = userData => ({
  type: SETTINGS_EDIT_REQUEST,
  payload: {
    userData,
  },
})

const settingsEditSuccess = userData => ({
  type: SETTINGS_EDIT_SUCCESS,
  payload: {
    userData,
  },
})

const settingsEditFailure = error => ({
  type: SETTINGS_EDIT_FAILURE,
  payload: {
    error,
  },
})

export const editSettings = (userId, data) => ((dispatch) => {
  dispatch(settingsEditRequest(data))

  const token = localStorage.getItem('token')
  const decodedToken = JWT.read(token)

  // this is needed as API expects birthday in US date format,
  // but birthday from form comes in BR date format
  if (data.birthday) {
    const birthdayPieces = data.birthday.split('/')
    // eslint-disable-next-line no-param-reassign
    data.birthday = `${birthdayPieces[1]}/${birthdayPieces[0]}/${birthdayPieces[2]}`
  }

  return authenticatedPut(`/users/${userId}`, data, token)
    .then((response) => {
      dispatch(settingsEditSuccess({ ...response.data.response.user, ...decodedToken.claim }))
      return true
    })
    .catch((error) => {
      dispatch(settingsEditFailure(error.data.message))
      return false
    })
})

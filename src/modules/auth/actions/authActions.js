import {
  AUTH_START,
  AUTH_FINISH,
  LOGOUT_SUCCESS,
  SIGNUP_FINISH,
  CLEAR_AUTH_ERRORS,
  CLEAR_RESET_PASSWORD_MESSAGE,
  SET_RESET_PASSWORD_MESSAGE,
} from '@modules/auth/actionTypes/authActionTypes.js'

export const startAuth = () => ({
  type: AUTH_START,
})
export const finishAuth = error => ({
  type: AUTH_FINISH,
  payload: {
    error,
  },
})
export const clearAuthErrors = () => ({
  type: CLEAR_AUTH_ERRORS,
})
export const clearResetPasswordMessage = () => ({
  type: CLEAR_RESET_PASSWORD_MESSAGE,
})
export const setResetPasswordMessage = message => ({
  type: SET_RESET_PASSWORD_MESSAGE,
  payload: {
    message,
  },
})
export const finishSignup = () => ({
  type: SIGNUP_FINISH,
})
export const loginError = error => ({
  type: LOGOUT_SUCCESS,
  payload: {
    error,
  },
})

export const signUp = signupData => (dispatch, getState) => {
  console.log('signup action recebida')
  // TODO
}

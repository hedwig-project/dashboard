import { Map } from 'immutable';
import {
  AUTH_START,
  AUTH_FINISH,
  LOGOUT_SUCCESS,
  SIGNUP_FINISH,
  CLEAR_AUTH_ERRORS,
  SET_RESET_PASSWORD_MESSAGE,
  CLEAR_RESET_PASSWORD_MESSAGE,
} from '@modules/auth/actionTypes/authActionTypes.js';

export const initialState = Map({
  authLoading: false,
  initialSignUpComplete: false,
});

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case AUTH_START:
      return state
        .set('authLoading', true)
    case AUTH_FINISH:
      return state
        .set('authLoading', false)
        .set('initialSignUpComplete', false)
        .set('authError', payload.error || null)
    case CLEAR_AUTH_ERRORS:
      return state
        .set('authError', null)
    case SET_RESET_PASSWORD_MESSAGE:
      return state
        .set('resetPasswordMessage', payload.message)
    case CLEAR_RESET_PASSWORD_MESSAGE:
      return state
        .set('resetPasswordMessage', null)
    case SIGNUP_FINISH:
      return state
        .set('authLoading', false)
        .set('initialSignUpComplete', true)
    case LOGOUT_SUCCESS:
      return state
    default:
      return state;
  }
}

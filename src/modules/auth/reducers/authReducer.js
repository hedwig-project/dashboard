import { 
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from '@modules/auth/actions/authActions'
import { Map } from 'immutable';
// import {
//   AUTH_START,
//   AUTH_FINISH,
//   LOGOUT_SUCCESS,
//   SIGNUP_FINISH,
//   CLEAR_AUTH_ERRORS,
//   SET_RESET_PASSWORD_MESSAGE,
//   CLEAR_RESET_PASSWORD_MESSAGE,
// } from '@modules/auth/actionTypes/authActionTypes.js';

export const initialState = Map({
  isFetching: false,
  isAuthenticated: localStorage.getItem('id_token') ? true : false,
})

// export default (state = initialState, { payload, type }) => {
//   switch (type) {
//     case AUTH_START:
//       return state
//         .set('authLoading', true)
//     case AUTH_FINISH:
//       return state
//         .set('authLoading', false)
//         .set('initialSignUpComplete', false)
//         .set('authError', payload.error || null)
//     case CLEAR_AUTH_ERRORS:
//       return state
//         .set('authError', null)
//     case SET_RESET_PASSWORD_MESSAGE:
//       return state
//         .set('resetPasswordMessage', payload.message)
//     case CLEAR_RESET_PASSWORD_MESSAGE:
//       return state
//         .set('resetPasswordMessage', null)
//     case SIGNUP_FINISH:
//       return state
//         .set('authLoading', false)
//         .set('initialSignUpComplete', true)
//     case LOGOUT_SUCCESS:
//       return state
//     default:
//       return state;
//   }
// }



// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state
        .set('isFetching', true)
        .set('isAuthenticated', false)
        .set('user', action.creds)
    case LOGIN_SUCCESS:
      return state
        .set('isFetching', false)
        .set('isAuthenticated', true)
        .set('errorMessage', '')
    case LOGIN_FAILURE:
      return state
        .set('isFetching', false)
        .set('isAuthenticated', false)
        .set('errorMessage', action.message)
    case LOGOUT_SUCCESS:
      return state
        .set('isFetching', true)
        .set('isAuthenticated', false)
    default:
      return state
}


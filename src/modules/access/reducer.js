import {
  GATE_PASSWORD_KEYBOARD_TYPE,
  GATE_PASSWORD_KEYBOARD_ERASE,
} from '@modules/access/actionTypes.js'

export const initialState = {
  gatePassword: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GATE_PASSWORD_KEYBOARD_TYPE:
      return Object.assign({}, state, { gatePassword: state.gatePassword + action.key })
    case GATE_PASSWORD_KEYBOARD_ERASE:
      return Object.assign({}, state, { gatePassword: state.gatePassword.slice(0, -1) })
    default:
      return state
  }
}

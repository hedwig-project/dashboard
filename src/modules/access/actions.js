import {
  GATE_PASSWORD_KEYBOARD_TYPE,
  GATE_PASSWORD_KEYBOARD_ERASE,
} from '@modules/access/actionTypes.js'

export const keyboardType = key => ({
  type: GATE_PASSWORD_KEYBOARD_TYPE,
  key,
})

export const keyboardErase = () => ({
  type: GATE_PASSWORD_KEYBOARD_ERASE,
})

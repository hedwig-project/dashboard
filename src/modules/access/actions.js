import {
  GATE_PASSWORD_KEYBOARD_TYPE,
  GATE_PASSWORD_KEYBOARD_ERASE,
  ALARM_CONFIGURATION_SUBMIT,
  LIGHT_CONFIGURATION_SUBMIT,
} from '@modules/access/actionTypes.js'

export const keyboardType = key => ({
  type: GATE_PASSWORD_KEYBOARD_TYPE,
  key,
})

export const keyboardErase = () => ({
  type: GATE_PASSWORD_KEYBOARD_ERASE,
})

export const alarmConfigurationSubmit = (activate, minutes) => ({
  type: ALARM_CONFIGURATION_SUBMIT,
  activate,
  minutes,
})

export const lightConfigurationSubmit = (initialTime, finalTime, keepOn) => ({
  type: LIGHT_CONFIGURATION_SUBMIT,
  initialTime,
  finalTime,
  keepOn,
})

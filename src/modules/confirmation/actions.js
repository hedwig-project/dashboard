import { convertTopicToModuleId } from '@helpers/morpheus'
import {
  AUTO_RESET_TEST_CONFIRMATION_AWAITING,
  COMMUNICATION_CONFIRMATION_AWAITING,
  DISPLAY_CONFIRMATION_AWAITING,
  GATE_PASSWORD_CONFIRMATION_AWAITING,
  NAME_CONFIRMATION_AWAITING,
  RF_CONFIRMATION_AWAITING,
  SW_RESET_CONFIRMATION_AWAITING,
  TIME_CONFIRMATION_AWAITING,
  AUTO_RESET_TEST_CONFIRMATION_RECEIVED,
  COMMUNICATION_CONFIRMATION_RECEIVED,
  DISPLAY_CONFIRMATION_RECEIVED,
  GATE_PASSWORD_CONFIRMATION_RECEIVED,
  NAME_CONFIRMATION_RECEIVED,
  RF_CONFIRMATION_RECEIVED,
  SW_RESET_CONFIRMATION_RECEIVED,
  TIME_CONFIRMATION_RECEIVED,
  AUTO_RESET_TEST_CONFIRMATION_CLEAR,
  COMMUNICATION_CONFIRMATION_CLEAR,
  DISPLAY_CONFIRMATION_CLEAR,
  GATE_PASSWORD_CONFIRMATION_CLEAR,
  NAME_CONFIRMATION_CLEAR,
  RF_CONFIRMATION_CLEAR,
  SW_RESET_CONFIRMATION_CLEAR,
  TIME_CONFIRMATION_CLEAR,
} from '@modules/confirmation/actionTypes.js'

export const autoResetTestConfirmationAwaiting = (module, waiting) => ({
  type: AUTO_RESET_TEST_CONFIRMATION_AWAITING,
  payload: { module, waiting },
})

export const communicationConfirmationAwaiting = (module, waiting) => ({
  type: COMMUNICATION_CONFIRMATION_AWAITING,
  payload: { module, waiting },
})

export const displayConfirmationAwaiting = (module, waiting) => ({
  type: DISPLAY_CONFIRMATION_AWAITING,
  payload: { module, waiting },
})

export const gatePasswordConfirmationAwaiting = (module, waiting) => ({
  type: GATE_PASSWORD_CONFIRMATION_AWAITING,
  payload: { module, waiting },
})

export const nameConfirmationAwaiting = (module, waiting) => ({
  type: NAME_CONFIRMATION_AWAITING,
  payload: { module, waiting },
})

export const rfConfirmationAwaiting = (module, waiting) => ({
  type: RF_CONFIRMATION_AWAITING,
  payload: { module, waiting },
})

export const swResetConfirmationAwaiting = (module, waiting) => ({
  type: SW_RESET_CONFIRMATION_AWAITING,
  payload: { module, waiting },
})

export const timeConfirmationAwaiting = (module, waiting) => ({
  type: TIME_CONFIRMATION_AWAITING,
  payload: { module, waiting },
})

export const autoResetTestConfirmationReceived = (module, confirmation) => ({
  type: AUTO_RESET_TEST_CONFIRMATION_RECEIVED,
  payload: { module, confirmation },
})

export const communicationConfirmationReceived = (module, confirmation) => ({
  type: COMMUNICATION_CONFIRMATION_RECEIVED,
  payload: { module, confirmation },
})

export const displayConfirmationReceived = (module, confirmation) => ({
  type: DISPLAY_CONFIRMATION_RECEIVED,
  payload: { module, confirmation },
})

export const gatePasswordConfirmationReceived = (module, confirmation) => ({
  type: GATE_PASSWORD_CONFIRMATION_RECEIVED,
  payload: { module, confirmation },
})

export const nameConfirmationReceived = (module, confirmation) => ({
  type: NAME_CONFIRMATION_RECEIVED,
  payload: { module, confirmation },
})

export const rfConfirmationReceived = (module, confirmation) => ({
  type: RF_CONFIRMATION_RECEIVED,
  payload: { module, confirmation },
})

export const swResetConfirmationReceived = (module, confirmation) => ({
  type: SW_RESET_CONFIRMATION_RECEIVED,
  payload: { module, confirmation },
})

export const timeConfirmationReceived = (module, confirmation) => ({
  type: TIME_CONFIRMATION_RECEIVED,
  payload: { module, confirmation },
})

export const autoResetTestConfirmationClear = module => ({
  type: AUTO_RESET_TEST_CONFIRMATION_CLEAR,
  payload: { module },
})

export const communicationConfirmationClear = module => ({
  type: COMMUNICATION_CONFIRMATION_CLEAR,
  payload: { module },
})

export const displayConfirmationClear = module => ({
  type: DISPLAY_CONFIRMATION_CLEAR,
  payload: { module },
})

export const gatePasswordConfirmationClear = module => ({
  type: GATE_PASSWORD_CONFIRMATION_CLEAR,
  payload: { module },
})

export const nameConfirmationClear = module => ({
  type: NAME_CONFIRMATION_CLEAR,
  payload: { module },
})

export const rfConfirmationClear = module => ({
  type: RF_CONFIRMATION_CLEAR,
  payload: { module },
})

export const swResetConfirmationClear = module => ({
  type: SW_RESET_CONFIRMATION_CLEAR,
  payload: { module },
})

export const timeConfirmationClear = module => ({
  type: TIME_CONFIRMATION_CLEAR,
  payload: { module },
})

export const processConfirmationMessage = message => (dispatch) => {
  const type = message.controlParameters.filter(item => item.parameter === 'ty')[0].value
  const moduleSerial = convertTopicToModuleId(message.topic)

  switch (type) {
    case 'autoreset_test_confirm':
      dispatch(autoResetTestConfirmationReceived(moduleSerial, message))
      break;
    case 'communication_confirm':
      dispatch(communicationConfirmationReceived(moduleSerial, message))
      break;
    case 'display_confirm':
      dispatch(displayConfirmationReceived(moduleSerial, message))
      break;
    case 'name_confirm':
      dispatch(nameConfirmationReceived(moduleSerial, message))
      break;
    case 'password_confirm':
      dispatch(gatePasswordConfirmationReceived(moduleSerial, message))
      break;
    case 'rf_confirm':
      dispatch(rfConfirmationReceived(moduleSerial, message))
      break;
    case 'sw_reset_confirm':
      dispatch(swResetConfirmationReceived(moduleSerial, message))
      break;
    case 'time_confirm':
      dispatch(timeConfirmationReceived(moduleSerial, message))
      break;
    default:
      break;
  }
}

export default {
  autoResetTestConfirmationAwaiting,
  communicationConfirmationAwaiting,
  displayConfirmationAwaiting,
  gatePasswordConfirmationAwaiting,
  nameConfirmationAwaiting,
  rfConfirmationAwaiting,
  swResetConfirmationAwaiting,
  timeConfirmationAwaiting,
  autoResetTestConfirmationReceived,
  communicationConfirmationReceived,
  displayConfirmationReceived,
  gatePasswordConfirmationReceived,
  nameConfirmationReceived,
  rfConfirmationReceived,
  swResetConfirmationReceived,
  timeConfirmationReceived,
  autoResetTestConfirmationClear,
  communicationConfirmationClear,
  displayConfirmationClear,
  gatePasswordConfirmationClear,
  nameConfirmationClear,
  rfConfirmationClear,
  swResetConfirmationClear,
  timeConfirmationClear,
  processConfirmationMessage,
}

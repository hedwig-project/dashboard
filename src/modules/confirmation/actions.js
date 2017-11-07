import { convertTopicToModuleId } from '@helpers/morpheus'
import {
  RF_CONFIRMATION,
  SW_RESET_CONFIRMATION,
  TIME_CONFIRMATION,
} from '@modules/confirmation/actionTypes.js'

export const rfConfirmation = (module, value) => ({
  type: RF_CONFIRMATION,
  payload: { module, value },
})

export const swResetConfirmation = (module, value) => ({
  type: SW_RESET_CONFIRMATION,
  payload: { module, value },
})

export const timeConfirmation = (module, value) => ({
  type: TIME_CONFIRMATION,
  payload: { module, value },
})

export const processConfirmationMessage = message => (dispatch) => {
  const type = message.controlParameters.filter(item => item.parameter === 'ty')[0].value
  const moduleSerial = convertTopicToModuleId(message.topic)

  switch (type) {
    case 'rf_confirm':
      dispatch(rfConfirmation(moduleSerial, true))
      break;
    case 'sw_reset_confirm':
      dispatch(swResetConfirmation(moduleSerial, true))
      break;
    case 'time_confirm':
      dispatch(timeConfirmation(moduleSerial, true))
      break;
    default:
      break;
  }
}

export default {
  rfConfirmation,
  swResetConfirmation,
  timeConfirmation,
  processConfirmationMessage,
}

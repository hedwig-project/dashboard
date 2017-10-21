import { decodeDataMessage } from '@helpers/morpheus'
import {
  MODULE_DATA_UPDATE,
  MORPHEUS_HELLO_SENT,
} from '@modules/data/actionTypes.js'

export const moduleDataUpdate = (module, data) => ({
  type: MODULE_DATA_UPDATE,
  payload: { module, data },
})

export const morpheusHello = morpheusId => ({
  type: MORPHEUS_HELLO_SENT,
  payload: morpheusId,
})

export const processDataMessage = message => (dispatch) => {
  const updates = decodeDataMessage(message)

  updates.map(update => dispatch(moduleDataUpdate(update.module, update.data)))
}

export default {
  moduleDataUpdate,
  morpheusHello,
  processDataMessage,
}

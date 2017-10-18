import { decodeDataMessage } from '@helpers/morpheus'
import {
  MODULE_DATA_UPDATE,
} from '@modules/data/actionTypes.js'

export const moduleDataUpdate = (module, data) => ({
  type: MODULE_DATA_UPDATE,
  payload: { module, data },
})

export const processDataMessage = message => (dispatch) => {
  const updates = decodeDataMessage(message)

  updates.map(update => dispatch(moduleDataUpdate(update.module, update.data)))
}

export default {
  moduleDataUpdate,
  processDataMessage,
}

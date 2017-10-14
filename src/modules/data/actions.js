import {
  MODULE_DATA_UPDATE,
} from '@modules/data/actionTypes.js'

export const moduleDataUpdate = (module, data) => ({
  type: MODULE_DATA_UPDATE,
  payload: { module, data },
})

export default {
  moduleDataUpdate,
}

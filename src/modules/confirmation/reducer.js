import {
  LOGOUT,
} from '@modules/auth/actionTypes'
import {
  RF_CONFIRMATION,
  SW_RESET_CONFIRMATION,
  TIME_CONFIRMATION,
} from '@modules/confirmation/actionTypes.js'
import {
  MODULE_ADD_SUCCESS,
  MODULE_DELETE_SUCCESS,
  MODULE_LOAD_SUCCESS,
} from '@modules/modules/actionTypes.js'
import { Map } from 'immutable'

export const initialState = Map({})

/*
 * State example
 * {
 *   '0123456': {
 *     rf: false,
 *     sw_reset: true,
 *     time: false,
 *   },
 * }
 */

export default (state = initialState, action) => {
  switch (action.type) {
    case RF_CONFIRMATION:
      return state.setIn([action.payload.module, 'rf'], action.payload.value)
    case SW_RESET_CONFIRMATION:
      return state.setIn([action.payload.module, 'sw_reset'], action.payload.value)
    case TIME_CONFIRMATION:
      return state.setIn([action.payload.module, 'time'], action.payload.value)
    case MODULE_ADD_SUCCESS:
      const newModule = { }
      newModule[action.payload.module.serial] = Map({
        rf: false,
        sw_reset: false,
        time: false,
      })
      return state.merge(Map(newModule))
    case MODULE_DELETE_SUCCESS:
      return state.delete(action.payload.module.serial)
    case MODULE_LOAD_SUCCESS:
      const moduleList = action.payload.modules
        .reduce((obj, module) => {
          // eslint-disable-next-line no-param-reassign
          obj[module.serial] = Map({
            rf: false,
            sw_reset: false,
            time: false,
          })
          return obj
        }, {})
      return state.merge(Map(moduleList))
    case LOGOUT:
      return Map({})
    default:
      return state
  }
}

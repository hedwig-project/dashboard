import {
  LOGOUT,
} from '@modules/auth/actionTypes'
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
 *     rf: {
 *       waiting: false,
 *     },
 *     sw_reset: {
 *       waiting: false,
 *     },
 *     time: {
 *       waiting: false,
 *     },
 *   },
 * }
 */

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTO_RESET_TEST_CONFIRMATION_AWAITING:
      return state.setIn([action.payload.module, 'auto_reset_test', 'waiting'], action.payload.waiting)
    case COMMUNICATION_CONFIRMATION_AWAITING:
      return state.setIn([action.payload.module, 'communication', 'waiting'], action.payload.waiting)
    case DISPLAY_CONFIRMATION_AWAITING:
      return state.setIn([action.payload.module, 'display', 'waiting'], action.payload.waiting)
    case GATE_PASSWORD_CONFIRMATION_AWAITING:
      return state.setIn([action.payload.module, 'gate_password', 'waiting'], action.payload.waiting)
    case NAME_CONFIRMATION_AWAITING:
      return state.setIn([action.payload.module, 'name', 'waiting'], action.payload.waiting)
    case RF_CONFIRMATION_AWAITING:
      return state.setIn([action.payload.module, 'rf', 'waiting'], action.payload.waiting)
    case SW_RESET_CONFIRMATION_AWAITING:
      return state.setIn([action.payload.module, 'sw_reset', 'waiting'], action.payload.waiting)
    case TIME_CONFIRMATION_AWAITING:
      return state.setIn([action.payload.module, 'time', 'waiting'], action.payload.waiting)
    case AUTO_RESET_TEST_CONFIRMATION_RECEIVED:
      if (!state.get(action.payload.module).get('auto_reset_test').get('waiting')) {
        return state
      }
      return state.setIn([action.payload.module, 'auto_reset_test', 'payload'], action.payload.confirmation)
    case COMMUNICATION_CONFIRMATION_RECEIVED:
      if (!state.get(action.payload.module).get('communication').get('waiting')) {
        return state
      }
      return state.setIn([action.payload.module, 'communication', 'payload'], action.payload.confirmation)
    case DISPLAY_CONFIRMATION_RECEIVED:
      if (!state.get(action.payload.module).get('display').get('waiting')) {
        return state
      }
      return state.setIn([action.payload.module, 'display', 'payload'], action.payload.confirmation)
    case GATE_PASSWORD_CONFIRMATION_RECEIVED:
      if (!state.get(action.payload.module).get('gate_password').get('waiting')) {
        return state
      }
      return state.setIn([action.payload.module, 'gate_password', 'payload'], action.payload.confirmation)
    case NAME_CONFIRMATION_RECEIVED:
      if (!state.get(action.payload.module).get('name').get('waiting')) {
        return state
      }
      return state.setIn([action.payload.module, 'name', 'payload'], action.payload.confirmation)
    case RF_CONFIRMATION_RECEIVED:
      if (!state.get(action.payload.module).get('rf').get('waiting')) {
        return state
      }
      return state.setIn([action.payload.module, 'rf', 'payload'], action.payload.confirmation)
    case SW_RESET_CONFIRMATION_RECEIVED:
      if (!state.get(action.payload.module).get('sw_reset').get('waiting')) {
        return state
      }
      return state.setIn([action.payload.module, 'sw_reset', 'payload'], action.payload.confirmation)
    case TIME_CONFIRMATION_RECEIVED:
      if (!state.get(action.payload.module).get('time').get('waiting')) {
        return state
      }
      return state.setIn([action.payload.module, 'time', 'payload'], action.payload.confirmation)
    case AUTO_RESET_TEST_CONFIRMATION_CLEAR:
      return state.setIn([action.payload.module, 'auto_reset_test'], Map({ waiting: false, payload: null }))
    case COMMUNICATION_CONFIRMATION_CLEAR:
      return state.setIn([action.payload.module, 'communication'], Map({ waiting: false, payload: null }))
    case DISPLAY_CONFIRMATION_CLEAR:
      return state.setIn([action.payload.module, 'display'], Map({ waiting: false, payload: null }))
    case GATE_PASSWORD_CONFIRMATION_CLEAR:
      return state.setIn([action.payload.module, 'gate_password'], Map({ waiting: false, payload: null }))
    case NAME_CONFIRMATION_CLEAR:
      return state.setIn([action.payload.module, 'name'], Map({ waiting: false, payload: null }))
    case RF_CONFIRMATION_CLEAR:
      return state.setIn([action.payload.module, 'rf'], Map({ waiting: false, payload: null }))
    case SW_RESET_CONFIRMATION_CLEAR:
      return state.setIn([action.payload.module, 'sw_reset'], Map({ waiting: false, payload: null }))
    case TIME_CONFIRMATION_CLEAR:
      return state.setIn([action.payload.module, 'time'], Map({ waiting: false, payload: null }))
    case MODULE_ADD_SUCCESS:
      const newModule = { }
      newModule[action.payload.module.serial] = Map({
        auto_reset_test: Map({ waiting: false, payload: null }),
        communication: Map({ waiting: false, payload: null }),
        display: Map({ waiting: false, payload: null }),
        gate_password: Map({ waiting: false, payload: null }),
        name: Map({ waiting: false, payload: null }),
        rf: Map({ waiting: false, payload: null }),
        sw_reset: Map({ waiting: false, payload: null }),
        time: Map({ waiting: false, payload: null }),
      })
      return state.merge(Map(newModule))
    case MODULE_DELETE_SUCCESS:
      return state.delete(action.payload.module.serial)
    case MODULE_LOAD_SUCCESS:
      const moduleList = action.payload.modules
        .reduce((obj, module) => {
          // eslint-disable-next-line no-param-reassign
          obj[module.serial] = Map({
            auto_reset_test: Map({ waiting: false, payload: null }),
            communication: Map({ waiting: false, payload: null }),
            display: Map({ waiting: false, payload: null }),
            gate_password: Map({ waiting: false, payload: null }),
            name: Map({ waiting: false, payload: null }),
            rf: Map({ waiting: false, payload: null }),
            sw_reset: Map({ waiting: false, payload: null }),
            time: Map({ waiting: false, payload: null }),
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

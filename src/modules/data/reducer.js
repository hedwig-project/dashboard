import {
  MODULE_DATA_UPDATE,
} from '@modules/data/actionTypes.js'
import {
  MODULE_ADD_SUCCESS,
  MODULE_DELETE,
  MODULE_LOAD_SUCCESS,
} from '@modules/modules/actionTypes.js'
import { Map } from 'immutable'

export const initialState = Map({})

/*
 * State example
 * {
 *   '0123456': {
 *     humidity: 71.9,
 *     luminosity: 256,
 *     opening: true,
 *     presence: false,
 *     temperature: 23.8,
 *     relay1: false,
 *     relay2: true,
 *     lastUpdatedAt: 1500914158,
 *   },
 * }
 */

export default (state = initialState, action) => {
  switch (action.type) {
    case MODULE_ADD_SUCCESS:
      const newModule = { }
      newModule[action.payload.module.serial] = Map({
        humidity: null,
        luminosity: null,
        opening: null,
        presence: null,
        temperature: null,
        relay1: null,
        relay2: null,
        lastUpdatedAt: null,
      })
      return state.merge(Map(newModule))
    case MODULE_DATA_UPDATE:
      const newData = { }
      newData[action.payload.module] = Map(action.payload.data)
      return state.mergeDeep(Map(newData))
    case MODULE_DELETE:
      return state.delete(action.payload.module.serial)
    case MODULE_LOAD_SUCCESS:
      const moduleList = action.payload.modules
        .reduce((obj, module) => {
          // eslint-disable-next-line no-param-reassign
          obj[module.serial] = Map({
            humidity: null,
            luminosity: null,
            opening: null,
            presence: null,
            temperature: null,
            relay1: null,
            relay2: null,
            lastUpdatedAt: null,
          })
          return obj
        }, {})
      return state.merge(Map(moduleList))
    default:
      return state
  }
}

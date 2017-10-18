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
 *     components: {
 *       relay1: {
 *         name: 'Luz 1',
 *       },
 *       relay2: {
 *         name: 'Luz 2',
 *       },
 *     },
 *     location: 'KITCHEN',
 *     name: 'Minha Cozinha',
 *     serial: '0123456',
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
          })
          return obj
        }, {})
      return state.merge(Map(moduleList))
    default:
      return state
  }
}

import {
  MODULE_ADD,
  MODULE_DELETE,
  MODULE_LOAD,
  MODULE_UPDATE,
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
    case MODULE_ADD:
      return state.set(action.payload.module.id, action.payload.module)
    case MODULE_DELETE:
      return state.delete(action.payload.module.id)
    case MODULE_LOAD:
      const modules = action.payload.modules
        .reduce((obj, module) => {
          // eslint-disable-next-line no-param-reassign
          obj[module.id] = module
          return obj
        }, {})
      return state.merge(Map(modules))
    case MODULE_UPDATE:
      return state.set(action.payload.module.id, action.payload.module)
    default:
      return state
  }
}

import {
  MODULE_DATA_UPDATE,
} from '@modules/data/actionTypes.js'
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
    case MODULE_DATA_UPDATE:
      return state.set(action.payload.module, action.payload.data)
    default:
      return state
  }
}

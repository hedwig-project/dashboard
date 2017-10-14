import {
  MORPHEUS_ADD,
  MORPHEUS_DELETE,
  MORPHEUS_LOAD,
  MORPHEUS_UPDATE,
} from '@morpheus/morpheus/actionTypes.js'
import { Map } from 'immutable'

export const initialState = Map({})

/*
 * State example
 * {
 *   'morpheusid1234': {
 *     resend: true,
 *     serial: 'morpheusid1234',
 *   },
 *   'morpheusid6789': {
 *     resend: false,
 *     serial: 'morpheusid6789',
 *   },
 * }
 */

export default (state = initialState, action) => {
  switch (action.type) {
    case MORPHEUS_ADD:
      return state.set(action.payload.morpheus.id, action.payload.morpheus)
    case MORPHEUS_DELETE:
      return state.delete(action.payload.morpheus.id)
    case MORPHEUS_LOAD:
      const morpheusList = action.payload.morpheus
        .reduce((obj, morpheus) => {
          // eslint-disable-next-line no-param-reassign
          obj[morpheus.id] = morpheus
          return obj
        }, {})
      return state.merge(Map(morpheusList))
    case MORPHEUS_UPDATE:
      return state.set(action.payload.morpheus.id, action.payload.morpheus)
    default:
      return state
  }
}

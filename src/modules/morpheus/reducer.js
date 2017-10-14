import {
  MORPHEUS_ADD_REQUEST,
  MORPHEUS_ADD_SUCCESS,
  MORPHEUS_ADD_FAILURE,
  CLEAR_MORPHEUS_ERRORS,
  MORPHEUS_DELETE,
  MORPHEUS_LOAD,
  MORPHEUS_UPDATE,
} from '@modules/morpheus/actionTypes.js'
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
    case CLEAR_MORPHEUS_ERRORS:
      return state
        .set('error', null)
    case MORPHEUS_ADD_REQUEST:
      return state
        .set('isAdding', true)
    case MORPHEUS_ADD_SUCCESS:
      return state
        .set('isAdding', false)
        .set(action.payload.morpheus.id, action.payload.morpheus)
    case MORPHEUS_ADD_FAILURE:
      return state
        .set('isAdding', false)
        .set('error', action.payload.error)
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

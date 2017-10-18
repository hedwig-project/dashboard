import {
  MORPHEUS_ADD_REQUEST,
  MORPHEUS_ADD_SUCCESS,
  MORPHEUS_ADD_FAILURE,
  CLEAR_MORPHEUS_ERRORS,
  MORPHEUS_DELETE,
  MORPHEUS_LOAD_SUCCESS,
  MORPHEUS_UPDATE,
} from '@modules/morpheus/actionTypes.js'
import { Map } from 'immutable'

export const initialState = Map({ error: null, isAdding: false, morpheus: Map({}) })

/*
 * State example
 * {
 *   error: null,
 *   isAdding: false,
 *   morpheus: {
 *     'morpheusid1234': {
 *       resend: true,
 *       serial: 'morpheusid1234',
 *     },
 *     'morpheusid6789': {
 *       resend: false,
 *       serial: 'morpheusid6789',
 *     },
 *   }
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
      const newMorpheus = {}
      newMorpheus[action.payload.morpheus.serial] = action.payload.morpheus
      return state
        .set('isAdding', false)
        .mergeDeep(Map({ morpheus: Map(newMorpheus) }))
    case MORPHEUS_ADD_FAILURE:
      return state
        .set('isAdding', false)
        .set('error', action.payload.error)
    case MORPHEUS_DELETE:
      return state.delete(action.payload.morpheus.serial)
    case MORPHEUS_LOAD_SUCCESS:
      const morpheusList = action.payload.morpheus
        .reduce((obj, morpheus) => {
          // eslint-disable-next-line no-param-reassign
          obj[morpheus.serial] = morpheus
          return obj
        }, {})
      return state.mergeDeep(Map({ morpheus: Map(morpheusList) }))
    case MORPHEUS_UPDATE:
      return state.set(action.payload.morpheus.serial, action.payload.morpheus)
    default:
      return state
  }
}

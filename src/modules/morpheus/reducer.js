import {
  LOGOUT,
} from '@modules/auth/actionTypes'
import {
  MODULE_ADD_SUCCESS,
} from '@modules/modules/actionTypes.js'
import {
  MORPHEUS_ADD_REQUEST,
  MORPHEUS_ADD_SUCCESS,
  MORPHEUS_ADD_FAILURE,
  CLEAR_MORPHEUS_ERRORS,
  MORPHEUS_DELETE_REQUEST,
  MORPHEUS_DELETE_SUCCESS,
  MORPHEUS_DELETE_FAILURE,
  MORPHEUS_LOAD_REQUEST,
  MORPHEUS_LOAD_SUCCESS,
  MORPHEUS_LOAD_FAILURE,
  MORPHEUS_UPDATE_REQUEST,
  MORPHEUS_UPDATE_SUCCESS,
  MORPHEUS_UPDATE_FAILURE,
  MORPHEUS_CONNECTED,
  MORPHEUS_DISCONNECTED,
} from '@modules/morpheus/actionTypes.js'
import { Map } from 'immutable'

export const initialState = Map({
  connected: Map({}),
  error: null,
  isAdding: false,
  isLoading: false,
  isRemoving: false,
  isUpdating: false,
  morpheus: Map({}),
})

/*
 * State example
 * {
 *   connected: {
 *    'morpheusid1234': true,
 *   },
 *   error: null,
 *   isAdding: false,
 *   isLoading: false,
 *   isRemoving: false,
 *   isUpdating: false,
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
    case MORPHEUS_DELETE_REQUEST:
      return state.set('isRemoving', true)
    case MORPHEUS_DELETE_SUCCESS:
      return state
        .set('isRemoving', false)
        .deleteIn(['morpheus', action.payload.morpheus.serial])
    case MORPHEUS_DELETE_FAILURE:
      return state
        .set('isRemoving', false)
        .set('error', action.payload.error)
    case MORPHEUS_LOAD_REQUEST:
      return state.set('isLoading', true)
    case MORPHEUS_LOAD_SUCCESS:
      const morpheusList = action.payload.morpheus
        .reduce((obj, morpheus) => {
          // eslint-disable-next-line no-param-reassign
          obj[morpheus.serial] = morpheus
          return obj
        }, {})
      return state
        .set('isLoading', false)
        .mergeDeep(Map({ morpheus: Map(morpheusList) }))
    case MORPHEUS_LOAD_FAILURE:
      return state
        .set('isLoading', false)
        .set('error', action.payload.error)
    case MORPHEUS_UPDATE_REQUEST:
      return state.set('isUpdating', true)
    case MORPHEUS_UPDATE_SUCCESS:
      const updatedMorpheus = {}
      updatedMorpheus[action.payload.morpheus.serial] = action.payload.morpheus
      return state
        .set('isUpdating', false)
        .mergeDeep(Map({ morpheus: Map(updatedMorpheus) }))
    case MORPHEUS_UPDATE_FAILURE:
      return state
        .set('isUpdating', false)
        .set('error', action.payload.error)
    case MORPHEUS_CONNECTED:
      return state.setIn(['connected', action.payload.morpheus], true)
    case MORPHEUS_DISCONNECTED:
      return state.deleteIn(['connected', action.payload.morpheus])
    case MODULE_ADD_SUCCESS:
      const beforeModuleAdd = state.get('morpheus').get(action.payload.module.morpheus.serial)
      return state.setIn(
        ['morpheus', action.payload.module.morpheus.serial],
        {
          ...beforeModuleAdd,
          modules: beforeModuleAdd.modules.concat([action.payload.module._id]),
        },
      )
    case LOGOUT:
      return Map({
        connected: Map({}),
        error: null,
        isAdding: false,
        isLoading: false,
        isRemoving: false,
        isUpdating: false,
        morpheus: Map({}),
      })
    default:
      return state
  }
}

import {
  LOGOUT,
} from '@modules/auth/actionTypes'
import {
  MODULE_ADD_REQUEST,
  MODULE_ADD_SUCCESS,
  MODULE_ADD_FAILURE,
  CLEAR_MODULE_ERRORS,
  MODULE_DELETE_REQUEST,
  MODULE_DELETE_SUCCESS,
  MODULE_DELETE_FAILURE,
  MODULE_LOAD_REQUEST,
  MODULE_LOAD_SUCCESS,
  MODULE_UPDATE_REQUEST,
  MODULE_UPDATE_SUCCESS,
  MODULE_UPDATE_FAILURE,
} from '@modules/modules/actionTypes.js'
import { Map } from 'immutable'

export const initialState = Map({
  error: null,
  isAdding: false,
  isLoading: false,
  isRemoving: false,
  isUpdating: false,
  modules: Map({}),
})

/*
 * State example
 * {
 *   error: null,
 *   isAdding: false,
 *   isLoading: false,
 *   isRemoving: false,
 *   isUpdating: false,
 *   modules: {
 *     '0123456': {
 *       components: {
 *         relay1: {
 *           name: 'Luz 1',
 *         },
 *         relay2: {
 *           name: 'Luz 2',
 *         },
 *       },
 *       location: 'KITCHEN',
 *       name: 'Minha Cozinha',
 *       serial: '0123456',
 *     }
 *   },
 * }
 */

export default (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_MODULE_ERRORS:
      return state
        .set('error', null)
    case MODULE_ADD_REQUEST:
      return state
        .set('isAdding', true)
    case MODULE_ADD_SUCCESS:
      const newModule = { }
      newModule[action.payload.module.serial] = action.payload.module
      return state
        .set('isAdding', false)
        .mergeDeep(Map({ modules: Map(newModule) }))
    case MODULE_ADD_FAILURE:
      return state
        .set('isAdding', false)
        .set('error', action.payload.error)
    case MODULE_DELETE_REQUEST:
      return state.set('isRemoving', true)
    case MODULE_DELETE_SUCCESS:
      return state
        .set('isRemoving', false)
        .deleteIn(['modules', action.payload.module.serial])
    case MODULE_DELETE_FAILURE:
      return state
        .set('isRemoving', false)
        .set('error', action.payload.error)
    case MODULE_LOAD_REQUEST:
      return state.set('isLoading', true)
    case MODULE_LOAD_SUCCESS:
      const moduleList = action.payload.modules
        .reduce((obj, module) => {
          // eslint-disable-next-line no-param-reassign
          obj[module.serial] = module
          return obj
        }, {})
      return state
        .set('isLoading', false)
        .mergeDeep(Map({ modules: Map(moduleList) }))
    case MODULE_UPDATE_REQUEST:
      return state.set('isUpdating', true)
    case MODULE_UPDATE_SUCCESS:
      const updatedModule = {}
      updatedModule[action.payload.module.serial] = action.payload.module
      return state
        .set('isUpdating', false)
        .mergeDeep(Map({ modules: Map(updatedModule) }))
    case MODULE_UPDATE_FAILURE:
      return state
        .set('isUpdating', false)
        .set('error', action.payload.error)
    case LOGOUT:
      return Map({
        error: null,
        isAdding: false,
        isLoading: false,
        modules: Map({}),
      })
    default:
      return state
  }
}

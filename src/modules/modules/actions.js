import {
  MODULE_ADD_SUCCESS,
  MODULE_ADD_FAILURE,
  MODULE_ADD_REQUEST,
  CLEAR_MODULE_ERRORS,
  MODULE_DELETE,
  MODULE_DELETE_REQUEST,
  MODULE_LOAD,
  MODULE_LOAD_REQUEST,
  MODULE_UPDATE,
  MODULE_UPDATE_REQUEST,
} from '@modules/modules/actionTypes.js'
import { authenticatedPost } from '@config/axios'


export const moduleAddRequest = () => ({
  type: MODULE_ADD_REQUEST,
})

export const moduleAddSuccess = module => ({
  type: MODULE_ADD_SUCCESS,
  payload: { module },
})

export const moduleAddFailed = error => ({
  type: MODULE_ADD_FAILURE,
  payload: { error },
})

export const clearModuleErrors = () => ({
  type: CLEAR_MODULE_ERRORS,
})

export const addModule = module => ((dispatch) => {
  dispatch(moduleAddRequest())
  const token = localStorage.getItem('token')
  // module.morpheusId = TODO

  // eslint-disable-next-line no-param-reassign
  module.resend = true  // TODO check this

  return authenticatedPost('/modules', module, token)
    .then((response) => {
      dispatch(moduleAddSuccess(module))
      return true
    })
    .catch((error) => {
      const data = error.data
      let message = ''
      if (data) {
        message = data.message
      }
      dispatch(moduleAddFailed(message || 'Erro ao adicionar módulo'))
      return false
    })
})

export const moduleDeleteRequest = module => ({
  type: MODULE_DELETE_REQUEST,
  payload: { module },
})

export const moduleDeleteSuccess = success => ({
  type: MODULE_DELETE,
  payload: { success },
})

export const moduleDeleteFailed = error => ({
  type: MODULE_DELETE,
  payload: { error },
})

export const moduleLoadRequest = user => ({
  type: MODULE_LOAD,
  payload: { user },
})

export const moduleLoadSuccess = modules => ({
  type: MODULE_LOAD_REQUEST,
  payload: { modules },
})

export const moduleLoadFailed = error => ({
  type: MODULE_LOAD,
  payload: { error },
})

export const moduleUpdateRequest = module => ({
  type: MODULE_UPDATE_REQUEST,
  payload: { module },
})

export const moduleUpdateSuccess = module => ({
  type: MODULE_UPDATE,
  payload: { module },
})

export const moduleUpdateFailed = error => ({
  type: MODULE_UPDATE,
  payload: { error },
})

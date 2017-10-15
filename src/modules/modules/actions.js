import {
  MODULE_ADD_SUCCESS,
  MODULE_ADD_FAILURE,
  MODULE_ADD_REQUEST,
  CLEAR_MODULE_ERRORS,
  MODULE_DELETE,
  MODULE_DELETE_REQUEST,
  MODULE_LOAD_FAILURE,
  MODULE_LOAD_SUCCESS,
  MODULE_LOAD_REQUEST,
  MODULE_UPDATE,
  MODULE_UPDATE_REQUEST,
} from '@modules/modules/actionTypes.js'
import { authenticatedPost, authenticatedGet } from '@config/axios'
import JWT from 'jwt-client'

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
  if (!module.morpheusId || module.morpheusId === '') {
    dispatch(moduleAddFailed('É necessário primeiro adicionar um Morpheus'))
    return
  }
  const token = localStorage.getItem('token')

  return authenticatedPost('/modules', module, token)
    .then((response) => {
      const returnedModule = response.data.response.module
      dispatch(moduleAddSuccess(returnedModule))
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

const modulesLoadRequest = () => ({
  type: MODULE_LOAD_REQUEST,
})

const modulesLoadSuccess = modules => ({
  type: MODULE_LOAD_SUCCESS,
  payload: { modules },
})

const modulesLoadFailed = error => ({
  type: MODULE_LOAD_FAILURE,
  payload: { error },
})

export const getModulesData = () => ((dispatch) => {
  dispatch(modulesLoadRequest())
  const token = localStorage.getItem('token')
  const user = JWT.read(token).claim

  return authenticatedGet(`user/${user._id}/modules`, token)
    .then((response) => {
      const returnedModules = response.data.response.modules
      dispatch(modulesLoadSuccess(returnedModules))
      return true
    })
    .catch((error) => {
      const data = error.data
      let message = ''
      if (data) {
        message = data.message
      }
      dispatch(modulesLoadFailed(message || 'Erro ao adicionar Morpheus'))
      return false
    })
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

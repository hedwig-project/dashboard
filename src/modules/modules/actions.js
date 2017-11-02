import {
  MODULE_ADD_SUCCESS,
  MODULE_ADD_FAILURE,
  MODULE_ADD_REQUEST,
  CLEAR_MODULE_ERRORS,
  MODULE_DELETE_REQUEST,
  MODULE_DELETE_SUCCESS,
  MODULE_DELETE_FAILURE,
  MODULE_LOAD_FAILURE,
  MODULE_LOAD_SUCCESS,
  MODULE_LOAD_REQUEST,
  MODULE_UPDATE_REQUEST,
  MODULE_UPDATE_SUCCESS,
  MODULE_UPDATE_FAILURE,
} from '@modules/modules/actionTypes.js'
import {
  authenticatedDelete,
  authenticatedGet,
  authenticatedPost,
  authenticatedPut,
} from '@config/axios'
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
  const user = JWT.read(token).claim

  // eslint-disable-next-line no-param-reassign
  module.userId = user._id
  // eslint-disable-next-line no-param-reassign
  module.components = {
    relay1: { name: module.relay1 },
    relay2: { name: module.relay2 },
  }

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

export const moduleDeleteSuccess = module => ({
  type: MODULE_DELETE_SUCCESS,
  payload: { module },
})

export const moduleDeleteFailed = error => ({
  type: MODULE_DELETE_FAILURE,
  payload: { error },
})

export const deleteModule = module => (dispatch) => {
  dispatch(moduleDeleteRequest(module))
  const token = localStorage.getItem('token')

  return authenticatedDelete(`/modules/${module._id}`, token)
    .then((response) => {
      dispatch(moduleDeleteSuccess(response.data.response.module))
      return true
    })
    .catch((error) => {
      const data = error.data
      let message = ''
      if (data) {
        message = data.message
      }
      dispatch(moduleDeleteFailed(message || 'Erro ao remover módulo'))
      return false
    })
}

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

  return authenticatedGet(`users/${user._id}/modules`, token)
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
  type: MODULE_UPDATE_SUCCESS,
  payload: { module },
})

export const moduleUpdateFailed = error => ({
  type: MODULE_UPDATE_FAILURE,
  payload: { error },
})

export const updateModule = module => (dispatch) => {
  dispatch(moduleUpdateRequest(module))
  const token = localStorage.getItem('token')
  const user = JWT.read(token).claim

  // eslint-disable-next-line no-param-reassign
  module.morpheusId = module.morpheusId || module.morpheus._id
  // eslint-disable-next-line no-param-reassign
  module.userId = user._id
  // eslint-disable-next-line no-param-reassign
  module.components = {
    display: {
      type: module.display_type || module.components.display.type,
      backlight: module.display_backlight || module.components.display.backlight,
    },
    relay1: { name: module.relay1 || module.components.relay1.name },
    relay2: { name: module.relay2 || module.components.relay2.name },
  }
  // eslint-disable-next-line no-param-reassign
  module.accessPoint = {
    ip: module.module_ip || module.accessPoint.ip,
    mode: module.module_ap_mode || module.accessPoint.mode,
    name: module.module_ap_name || module.accessPoint.name,
    password: module.module_ap_password || module.accessPoint.password,
  }
  // eslint-disable-next-line no-param-reassign
  module.connection = {
    ssid: module.home_ssid || (module.connection ? module.connection.ssid : ''),
    password: module.home_password || (module.connection ? module.connection.password : ''),
  }
  // eslint-disable-next-line no-param-reassign
  module.autoResetTest = module.autoResetTest || module.auto_reset_test

  return authenticatedPut(`/modules/${module._id}`, module, token)
    .then((response) => {
      const returnedModule = response.data.response.module
      dispatch(moduleUpdateSuccess(returnedModule))
      return true
    })
    .catch((error) => {
      const data = error.data
      let message = ''
      if (data) {
        message = data.message
      }
      dispatch(moduleUpdateFailed(message || 'Erro ao atualizar módulo'))
      return false
    })
}

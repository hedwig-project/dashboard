import {
  MODULE_ADD,
  MODULE_ADD_REQUEST,
  MODULE_DELETE,
  MODULE_DELETE_REQUEST,
  MODULE_LOAD,
  MODULE_LOAD_REQUEST,
  MODULE_UPDATE,
  MODULE_UPDATE_REQUEST,
} from '@modules/modules/actionTypes.js'


export const moduleAddRequest = module => ({
  type: MODULE_ADD_REQUEST,
  payload: { module },
})

export const moduleAddSuccess = module => ({
  type: MODULE_ADD,
  payload: { module },
})

export const moduleAddFailed = error => ({
  type: MODULE_ADD,
  payload: { error },
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

export default {
  moduleAddRequest,
  moduleAddSuccess,
  moduleAddFailed,
  moduleDeleteRequest,
  moduleDeleteSuccess,
  moduleDeleteFailed,
  moduleLoadRequest,
  moduleLoadSuccess,
  moduleLoadFailed,
  moduleUpdateRequest,
  moduleUpdateSuccess,
  moduleUpdateFailed,
}

import {
  MORPHEUS_ADD,
  MORPHEUS_ADD_REQUEST,
  MORPHEUS_DELETE,
  MORPHEUS_DELETE_REQUEST,
  MORPHEUS_LOAD,
  MORPHEUS_LOAD_REQUEST,
  MORPHEUS_UPDATE,
  MORPHEUS_UPDATE_REQUEST,
} from '@morpheus/morpheus/actionTypes.js'


export const morpheusAddRequest = morpheus => ({
  type: MORPHEUS_ADD_REQUEST,
  payload: { morpheus },
})

export const morpheusAddSuccess = morpheus => ({
  type: MORPHEUS_ADD,
  payload: { morpheus },
})

export const morpheusAddFailed = error => ({
  type: MORPHEUS_ADD,
  payload: { error },
})

export const morpheusDeleteRequest = morpheus => ({
  type: MORPHEUS_DELETE_REQUEST,
  payload: { morpheus },
})

export const morpheusDeleteSuccess = success => ({
  type: MORPHEUS_DELETE,
  payload: { success },
})

export const morpheusDeleteFailed = error => ({
  type: MORPHEUS_DELETE,
  payload: { error },
})

export const morpheusLoadRequest = user => ({
  type: MORPHEUS_LOAD,
  payload: { user },
})

export const morpheusLoadSuccess = morpheus => ({
  type: MORPHEUS_LOAD_REQUEST,
  payload: { morpheus },
})

export const morpheusLoadFailed = error => ({
  type: MORPHEUS_LOAD,
  payload: { error },
})

export const morpheusUpdateRequest = morpheus => ({
  type: MORPHEUS_UPDATE_REQUEST,
  payload: { morpheus },
})

export const morpheusUpdateSuccess = morpheus => ({
  type: MORPHEUS_UPDATE,
  payload: { morpheus },
})

export const morpheusUpdateFailed = error => ({
  type: MORPHEUS_UPDATE,
  payload: { error },
})

export default {
  morpheusAddRequest,
  morpheusAddSuccess,
  morpheusAddFailed,
  morpheusDeleteRequest,
  morpheusDeleteSuccess,
  morpheusDeleteFailed,
  morpheusLoadRequest,
  morpheusLoadSuccess,
  morpheusLoadFailed,
  morpheusUpdateRequest,
  morpheusUpdateSuccess,
  morpheusUpdateFailed,
}

import {
  MORPHEUS_ADD_SUCCESS,
  MORPHEUS_ADD_FAILURE,
  MORPHEUS_ADD_REQUEST,
  CLEAR_MORPHEUS_ERRORS,
  MORPHEUS_DELETE,
  MORPHEUS_DELETE_REQUEST,
  MORPHEUS_LOAD,
  MORPHEUS_LOAD_REQUEST,
  MORPHEUS_UPDATE,
  MORPHEUS_UPDATE_REQUEST,
} from '@modules/morpheus/actionTypes.js'
import { authenticatedPost } from '@config/axios'

export const morpheusAddRequest = () => ({
  type: MORPHEUS_ADD_REQUEST,
})

export const morpheusAddSuccess = morpheus => ({
  type: MORPHEUS_ADD_SUCCESS,
  payload: { morpheus },
})

export const morpheusAddFailed = error => ({
  type: MORPHEUS_ADD_FAILURE,
  payload: { error },
})

export const clearMorpheusErrors = () => ({
  type: CLEAR_MORPHEUS_ERRORS,
})

export const addMorpheus = morpheus => ((dispatch) => {
  dispatch(morpheusAddRequest())
  const token = localStorage.getItem('token')
  // morpheus.user = TODO

  // eslint-disable-next-line no-param-reassign
  morpheus.resend = true  // TODO check this

  return authenticatedPost('/morpheus', morpheus, token)
    .then((response) => {
      const returnedMorpheus = response.data.response.morpheus
      dispatch(morpheusAddSuccess(returnedMorpheus))
      return true
    })
    .catch((error) => {
      const data = error.data
      let message = ''
      if (data) {
        message = data.message
      }
      dispatch(morpheusAddFailed(message || 'Erro ao adicionar Morpheus'))
      return false
    })
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

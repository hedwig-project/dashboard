import {
  MORPHEUS_ADD_SUCCESS,
  MORPHEUS_ADD_FAILURE,
  MORPHEUS_ADD_REQUEST,
  CLEAR_MORPHEUS_ERRORS,
  MORPHEUS_DELETE,
  MORPHEUS_DELETE_REQUEST,
  MORPHEUS_LOAD_SUCCESS,
  MORPHEUS_LOAD_FAILURE,
  MORPHEUS_LOAD_REQUEST,
  MORPHEUS_UPDATE,
  MORPHEUS_UPDATE_REQUEST,
} from '@modules/morpheus/actionTypes.js'
import { authenticatedPost, authenticatedGet } from '@config/axios'
import JWT from 'jwt-client'

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
  const user = JWT.read(token).claim

  // eslint-disable-next-line no-param-reassign
  morpheus.user = user._id
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

const morpheusLoadRequest = () => ({
  type: MORPHEUS_LOAD_REQUEST,
})

const morpheusLoadSuccess = morpheus => ({
  type: MORPHEUS_LOAD_SUCCESS,
  payload: { morpheus },
})

const morpheusLoadFailed = error => ({
  type: MORPHEUS_LOAD_FAILURE,
  payload: { error },
})

export const getMorpheusData = () => ((dispatch) => {
  dispatch(morpheusLoadRequest())
  const token = localStorage.getItem('token')
  const user = JWT.read(token).claim

  return authenticatedGet(`user/${user._id}/morpheus`, token)
    .then((response) => {
      const returnedMorpheus = response.data.response.morpheus
      dispatch(morpheusLoadSuccess(returnedMorpheus))
      return returnedMorpheus[0]._id // TODO assumes there is only one morpheus
    })
    .catch((error) => {
      const data = error.data
      let message = ''
      if (data) {
        message = data.message
      }
      dispatch(morpheusLoadFailed(message || 'Erro ao adicionar Morpheus'))
      return false
    })
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

import {
  MORPHEUS_ADD_SUCCESS,
  MORPHEUS_ADD_FAILURE,
  MORPHEUS_ADD_REQUEST,
  CLEAR_MORPHEUS_ERRORS,
  MORPHEUS_DELETE_REQUEST,
  MORPHEUS_DELETE_SUCCESS,
  MORPHEUS_DELETE_FAILURE,
  MORPHEUS_LOAD_SUCCESS,
  MORPHEUS_LOAD_FAILURE,
  MORPHEUS_LOAD_REQUEST,
  MORPHEUS_UPDATE_REQUEST,
  MORPHEUS_UPDATE_SUCCESS,
  MORPHEUS_UPDATE_FAILURE,
  MORPHEUS_CONNECTED,
  MORPHEUS_DISCONNECTED,
} from '@modules/morpheus/actionTypes.js'
import {
  authenticatedPost,
  authenticatedGet,
  authenticatedPut,
  authenticatedDelete,
} from '@config/axios'
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

export const morpheusDeleteSuccess = morpheus => ({
  type: MORPHEUS_DELETE_SUCCESS,
  payload: { morpheus },
})

export const morpheusDeleteFailed = error => ({
  type: MORPHEUS_DELETE_FAILURE,
  payload: { error },
})

export const deleteMorpheus = morpheus => (dispatch) => {
  dispatch(morpheusDeleteRequest(morpheus))
  const token = localStorage.getItem('token')

  return authenticatedDelete(`/morpheus/${morpheus._id}`, token)
    .then((response) => {
      dispatch(morpheusDeleteSuccess(response.data.response.morpheus))
      return true
    })
    .catch((error) => {
      const data = error.data
      let message = ''
      if (data) {
        message = data.message
      }
      dispatch(morpheusDeleteFailed(message || 'Erro ao remover Morpheus'))
      return false
    })
}

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

  return authenticatedGet(`users/${user._id}/morpheus`, token)
    .then((response) => {
      const returnedMorpheusList = response.data.response.morpheus
      dispatch(morpheusLoadSuccess(returnedMorpheusList))
      return returnedMorpheusList
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
  type: MORPHEUS_UPDATE_SUCCESS,
  payload: { morpheus },
})

export const morpheusUpdateFailed = error => ({
  type: MORPHEUS_UPDATE_FAILURE,
  payload: { error },
})

export const updateMorpheus = morpheus => (dispatch) => {
  dispatch(morpheusUpdateRequest(morpheus))
  const token = localStorage.getItem('token')
  const user = JWT.read(token).claim

  // eslint-disable-next-line no-param-reassign
  morpheus.user = user._id

  return authenticatedPut(`/morpheus/${morpheus._id}`, morpheus, token)
    .then((response) => {
      const returnedMorpheus = response.data.response.morpheus
      dispatch(morpheusUpdateSuccess(returnedMorpheus))
      return true
    })
    .catch((error) => {
      const data = error.data
      let message = ''
      if (data) {
        message = data.message
      }
      dispatch(morpheusUpdateFailed(message || 'Erro ao atualizar Morpheus'))
      return false
    })
}

export const morpheusConnected = morpheus => ({
  type: MORPHEUS_CONNECTED,
  payload: { morpheus },
})

export const morpheusDisconnected = morpheus => ({
  type: MORPHEUS_DISCONNECTED,
  payload: { morpheus },
})

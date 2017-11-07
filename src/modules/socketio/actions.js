import {
  SOCKETIO_CONNECT,
  SOCKETIO_DISCONNECT,
  SOCKETIO_RECONNECT,
  SOCKETIO_RECONNECT_FAILED,
  SOCKETIO_RECONNECTING,
  SOCKETIO_ACTION,
  SOCKETIO_CONFIGURATION,
  SOCKETIO_CONFIRMATION,
  SOCKETIO_DATA,
  SOCKETIO_REPORT,
} from '@modules/socketio/actionTypes.js'

export const socketIOConnected = () => ({
  type: SOCKETIO_CONNECT,
})

export const socketIODisconnected = () => ({
  type: SOCKETIO_DISCONNECT,
})

export const socketIOReconnected = () => ({
  type: SOCKETIO_RECONNECT,
})

export const socketIOReconnectFailed = () => ({
  type: SOCKETIO_RECONNECT_FAILED,
})

export const socketIOReconnecting = () => ({
  type: SOCKETIO_RECONNECTING,
})

export const socketIOAction = message => ({
  type: SOCKETIO_ACTION,
  payload: message,
})

export const socketIOConfiguration = message => ({
  type: SOCKETIO_CONFIGURATION,
  payload: message,
})

export const socketIOConfirmation = message => ({
  type: SOCKETIO_CONFIRMATION,
  payload: message,
})

export const socketIOData = message => ({
  type: SOCKETIO_DATA,
  payload: message,
})

export const socketIOReport = message => ({
  type: SOCKETIO_REPORT,
  payload: message,
})

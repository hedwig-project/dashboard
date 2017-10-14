import {
  SOCKETIO_CONNECT,
  SOCKETIO_DISCONNECT,
  SOCKETIO_RECONNECT,
  SOCKETIO_RECONNECT_FAILED,
  SOCKETIO_RECONNECTING,
} from '@modules/socketio/actionTypes.js'
import { Map } from 'immutable'

export const initialState = Map({
  connected: false,
  reconnectFailed: false,
  reconnecting: false,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case SOCKETIO_CONNECT:
      return state
        .set('connected', true)
        .set('reconnecting', false)
    case SOCKETIO_DISCONNECT:
      return state
        .set('connected', false)
        .set('reconnecting', false)
    case SOCKETIO_RECONNECT:
      return state
        .set('connected', true)
        .set('reconnecting', false)
    case SOCKETIO_RECONNECT_FAILED:
      return state
        .set('reconnectFailed', true)
        .set('reconnecting', false)
    case SOCKETIO_RECONNECTING:
      return state.set('reconnecting', true)
    default:
      return state
  }
}

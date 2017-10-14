import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { responsiveStateReducer } from 'redux-responsive'
import auth from '@modules/auth/reducer'
import access from '@modules/access/reducer'
import data from '@modules/data/reducer'
import modules from '@modules/modules/reducer'
import morpheus from '@modules/morpheus/reducer'
import socketio from '@modules/socketio/reducer'

export default combineReducers({
  routing: routerReducer,
  browser: responsiveStateReducer,
  form: formReducer,
  auth,
  access,
  data,
  modules,
  morpheus,
  socketio,
})

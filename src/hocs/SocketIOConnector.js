import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import io from 'socket.io-client'
import ioconfig from '@config/socketio'
import DefaultPage from '@components/DefaultPage'
import ReconnectingSnackbar from '@containers/ReconnectingSnackbar'
import ReconnectFailedSnackbar from '@containers/ReconnectFailedSnackbar'
import ReconnectSnackbar from '@containers/ReconnectSnackbar'
import * as action from '@modules/socketio/actions'

const socket = io.connect(ioconfig.url, ioconfig.options)

class SocketIOConnector extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentWillMount() {
    const { dispatch, isAuthenticated } = this.props

    if (!isAuthenticated) {
      this.props.dispatch(push('/'))
    }
  }

  componentDidMount() {
    const { dispatch } = this.props

    socket.on('connect', () => {
      socket.emit('hello', '{"morpheusId":"adf654wae84fea5d8ea6","type":"dashboard"}')
      dispatch(action.socketIOConnected())
    })

    socket.on('confirmation', (message) => {
      dispatch(action.socketIOConfirmation(message))
    })

    socket.on('data', (message) => {
      dispatch(action.socketIOData(message))
    })

    socket.on('reconnect', () => {
      dispatch(action.socketIOReconnected())
    })

    socket.on('reconnect_failed', () => {
      dispatch(action.socketIOReconnectFailed())
    })

    socket.on('reconnecting', () => {
      dispatch(action.socketIOReconnecting())
    })

    socket.on('disconnect', () => {
      dispatch(action.socketIODisconnected())
    })
  }

  componentWillUnmount() {
    const { dispatch } = this.props

    socket.disconnect()
    dispatch(action.socketIODisconnected())
  }

  render() {
    return (
      <DefaultPage isAuthenticated={this.props.isAuthenticated}>
        {this.props.children}
        <ReconnectingSnackbar />
        <ReconnectFailedSnackbar />
        <ReconnectSnackbar />
      </DefaultPage>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.get('isAuthenticated'),
})

export default connect(mapStateToProps)(SocketIOConnector)

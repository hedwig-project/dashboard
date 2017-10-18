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
import { getUserData } from '@modules/auth/actions'
import { getModulesData } from '@modules/modules/actions'
import { getMorpheusData } from '@modules/morpheus/actions'
import { processDataMessage } from '@modules/data/actions'

let socket

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

    dispatch(getUserData())
    dispatch(getModulesData())

    socket = io.connect(ioconfig.url, ioconfig.options)

    socket.on('connect', () => {
      dispatch(getMorpheusData())
        .then((morpheusList) => {
          // eslint-disable-next-line array-callback-return
          morpheusList.map((morpheus) => {
            if (morpheus.serial) {
              socket.emit('hello', morpheus.serial, `{"morpheusId":"${morpheus.serial}","type":"dashboard"}`)
            }
          })
        })
      dispatch(action.socketIOConnected())
    })

    socket.on('confirmation', (morpheusId, message) => {
      dispatch(action.socketIOConfirmation(message))
    })

    socket.on('data', (morpheusId, message) => {
      dispatch(action.socketIOData(message))
      dispatch(processDataMessage(message))
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

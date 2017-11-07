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
import { processConfirmationMessage } from '@modules/confirmation/actions'
import { morpheusHello, processDataMessage } from '@modules/data/actions'

let socket

class SocketIOConnector extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    morpheus: PropTypes.array.isRequired,
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
    dispatch(getMorpheusData())

    socket = io.connect(ioconfig.url, ioconfig.options)

    socket.on('connect', () => {
      dispatch(action.socketIOConnected())
    })

    socket.on('confirmation', (morpheusId, message) => {
      dispatch(action.socketIOConfirmation(message))
      dispatch(processConfirmationMessage(message))
    })

    socket.on('data', (morpheusId, message) => {
      dispatch(action.socketIOData(message))
      dispatch(processDataMessage([message]))
    })

    socket.on('report', (morpheusId, message) => {
      dispatch(action.socketIOReport(message))
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

  componentDidUpdate(prevProps) {
    const { dispatch, morpheus } = this.props
    morpheus
      .map(morpheusData => morpheusData.serial)
      .filter(serial => !prevProps.morpheus
        .map(morpheusData => morpheusData.serial)
        .includes(serial),
      )
      .map((serial) => {
        socket.emit('hello', serial, `{"morpheusId":"${serial}","type":"dashboard"}`)
        return dispatch(morpheusHello(serial))
      })
  }

  emitAction = (morpheusId, message) => {
    const { dispatch } = this.props

    socket.emit('action', morpheusId, message)
    dispatch(action.socketIOAction(message))
  }

  emitConfiguration = (morpheusId, message) => {
    const { dispatch } = this.props

    socket.emit('configuration', morpheusId, message)
    dispatch(action.socketIOConfiguration(message))
  }

  /* eslint-disable comma-dangle */
  render() {
    return (
      <DefaultPage isAuthenticated={this.props.isAuthenticated}>
        {
          React.Children.map(this.props.children,
            child => React.cloneElement(
              child,
              { emitAction: this.emitAction, emitConfiguration: this.emitConfiguration },
            )
          )
        }
        <ReconnectingSnackbar />
        <ReconnectFailedSnackbar />
        <ReconnectSnackbar />
      </DefaultPage>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.get('isAuthenticated'),
  morpheus: state.morpheus.get('morpheus').toArray(),
})

export default connect(mapStateToProps)(SocketIOConnector)

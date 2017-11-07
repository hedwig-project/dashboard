import React from 'react'
import PropTypes from 'prop-types'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'

/* eslint-disable no-nested-ternary */
class ConnectionStatus extends React.Component {
  static propTypes = {
    connected: PropTypes.bool.isRequired,
    morpheusConnected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  }

  render() {
    const {
      connected,
      morpheusConnected,
      onClick,
    } = this.props

    return (
      <IconButton
        iconStyle={{
          color: connected && morpheusConnected ? '#4CAF50' : (connected ? '#FFEB3B' : '#F44336'),
        }}
        tooltip={connected && morpheusConnected ? 'Conectado' : (connected ? 'Há Morpheus desconectados' : 'Desconectado')}
        tooltipPosition="bottom-left"
        onClick={onClick}
      >
        <FontIcon
          className={connected && morpheusConnected ? 'fa fa-check' : (connected ? 'fa fa-exclamation' : 'fa fa-times')}
          style={{ color: '#FFFFFF' }}
        />
      </IconButton>
    )
  }
}

export default ConnectionStatus

import React from 'react'
import PropTypes from 'prop-types'
import FontIcon from 'material-ui/FontIcon'
import IconButton from 'material-ui/IconButton'

class ConnectionStatus extends React.Component {
  static propTypes = {
    connected: PropTypes.bool.isRequired,
  }

  render() {
    const {
      connected,
    } = this.props

    return (
      <IconButton
        disableTouchRipple
        iconStyle={{ color: '#FFFFFF' }}
        tooltip={connected ? 'Conectado' : 'Desconectado'}
        tooltipPosition="bottom-left"
        style={{ cursor: 'auto' }}
      >
        <FontIcon
          className={connected ? 'fa fa-check' : 'fa fa-exclamation'}
          style={{ color: '#FFFFFF' }}
        />
      </IconButton>
    )
  }
}

export default ConnectionStatus

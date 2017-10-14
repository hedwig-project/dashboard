import PropTypes from 'prop-types'
import React from 'react'
import Snackbar from 'material-ui/Snackbar'

class ReconnectSnackbar extends React.Component {
  static propTypes = {
    connected: PropTypes.bool.isRequired,
    reconnecting: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { connected, reconnecting } = this.props

    if (!connected && reconnecting && nextProps.connected && !nextProps.reconnecting) {
      this.setState({ open: true })
    } else if (connected && !reconnecting && !nextProps.connected && nextProps.reconnecting) {
      this.setState({ open: false })
    }
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <Snackbar
        open={this.state.open}
        message="Conexão reestabelecida!"
        autoHideDuration={5000}
        action="Ok"
        onActionTouchTap={this.handleRequestClose}
        onRequestClose={this.handleRequestClose}
      />
    )
  }
}

export default ReconnectSnackbar

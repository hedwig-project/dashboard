import PropTypes from 'prop-types'
import React from 'react'
import Snackbar from 'material-ui/Snackbar'

class ReconnectingSnackbar extends React.Component {
  static propTypes = {
    reconnecting: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { reconnecting } = this.props

    if (!reconnecting && nextProps.reconnecting) {
      this.setState({ open: true })
    } else if (reconnecting && !nextProps.reconnecting) {
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
        message="Conexão perdida! Tentando reconectar..."
        autoHideDuration={25000}
        action="Ok"
        onActionTouchTap={this.handleRequestClose}
        onRequestClose={this.handleRequestClose}
      />
    )
  }
}

export default ReconnectingSnackbar

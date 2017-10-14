import PropTypes from 'prop-types'
import React from 'react'
import Snackbar from 'material-ui/Snackbar'

class ReconnectFailedSnackbar extends React.Component {
  static propTypes = {
    reconnectFailed: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { reconnectFailed } = this.props

    if (!reconnectFailed && nextProps.reconnectFailed) {
      this.setState({ open: true })
    }
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <Snackbar
        open={this.state.open}
        message="Não é possível estabelecer conexão! Tente novamente"
        autoHideDuration={5000}
        action="Ok"
        onActionTouchTap={this.handleRequestClose}
        onRequestClose={this.handleRequestClose}
      />
    )
  }
}

export default ReconnectFailedSnackbar

import PropTypes from 'prop-types'
import React from 'react'
import Snackbar from 'material-ui/Snackbar'

class DeviceAddedSnackbar extends React.Component {
  static propTypes = {
    deviceCount: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { deviceCount } = this.props

    if (nextProps.deviceCount > deviceCount && deviceCount > 0) {
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
        message={this.props.message}
        autoHideDuration={3000}
        action="Ok"
        onActionTouchTap={this.handleRequestClose}
        onRequestClose={this.handleRequestClose}
      />
    )
  }
}

export default DeviceAddedSnackbar

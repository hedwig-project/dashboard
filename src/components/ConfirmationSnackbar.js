import PropTypes from 'prop-types'
import React from 'react'
import Snackbar from 'material-ui/Snackbar'

class ConfirmationSnackbar extends React.Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    shouldOpen: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    const { shouldOpen } = this.props

    if (nextProps.shouldOpen && !shouldOpen) {
      this.setState({ open: true })
    }
  }

  handleRequestClose = () => {
    const { onClose } = this.props
    this.setState({ open: false })
    onClose()
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

export default ConfirmationSnackbar

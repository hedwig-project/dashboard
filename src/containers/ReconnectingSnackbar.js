import { connect } from 'react-redux'
import { compose } from 'redux'
import ReconnectingSnackbar from '@components/ReconnectingSnackbar'

const mapStateToProps = state => ({
  reconnecting: state.socketio.get('reconnecting'),
})

export default compose(
  connect(mapStateToProps),
)(ReconnectingSnackbar)

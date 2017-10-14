import { connect } from 'react-redux'
import { compose } from 'redux'
import ReconnectSnackbar from '@components/ReconnectSnackbar'

const mapStateToProps = state => ({
  connected: state.socketio.get('connected'),
  reconnecting: state.socketio.get('reconnecting'),
})

export default compose(
  connect(mapStateToProps),
)(ReconnectSnackbar)

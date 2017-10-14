import { connect } from 'react-redux'
import { compose } from 'redux'
import ReconnectFailedSnackbar from '@components/ReconnectFailedSnackbar'

const mapStateToProps = state => ({
  reconnectFailed: state.socketio.get('reconnectFailed'),
})

export default compose(
  connect(mapStateToProps),
)(ReconnectFailedSnackbar)

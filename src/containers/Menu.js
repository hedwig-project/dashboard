import { connect } from 'react-redux'
import { compose } from 'redux'
import { push } from 'react-router-redux'
import Menu from '@components/Menu'
import * as authActions from '@modules/auth/actions'

const mapStateToProps = state => ({
  connected: state.socketio.get('connected'),
  modules: state.modules.toJS(),
})

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(authActions.logout())
    dispatch(push('/'))
  },
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Menu)

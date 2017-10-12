import { connect } from 'react-redux'
import { compose } from 'redux'
import { push } from 'react-router-redux';
import Menu from '@components/Menu'
import * as authActions from '@modules/auth/actions/authActions.js'

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(authActions.logout())
    dispatch(push('/'))
  },
})

export default compose(
  connect(null, mapDispatchToProps),
)(Menu)

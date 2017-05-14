// import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { compose } from 'redux'
import LoginForm from '@modules/auth/components/LoginForm'
import {
  startAuth,
  finishAuth,
  clearAuthErrors,
} from '@modules/auth/actions/authActions.js'

const mapDispatchToProps = dispatch => ({
  loginWithPassword({ email, password }) {
    dispatch(startAuth())
    // firebase.login({
    //   email,
    //   password,
    // }).then(() => {
    dispatch(finishAuth())
    //   dispatch(push('/'))
    // }).catch((error) => {
    //   dispatch(finishAuth(error))
    // })
    console.log('pedido de login recebido, email', email, 'password', password)
  },
  clearError() {
    dispatch(clearAuthErrors())
  },
})

const mapStateToProps = state => ({
  authLoading: state.auth.get('authLoading'),
  authError: state.auth.get('authError'),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(LoginForm)

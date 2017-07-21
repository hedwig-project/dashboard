import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import validator from '@helpers/validator'
import schema from '@schemas/login'
import LoginForm from '@routes/LandingPage/components/LoginForm'
import {
  startAuth,
  finishAuth,
  clearAuthErrors,
} from '@modules/auth/actions/authActions.js'

const validate = values => validator(values, schema)

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
  reduxForm({
    form: 'LoginForm',
    validate,
  }),
)(LoginForm)

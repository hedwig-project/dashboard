import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import validator from '@helpers/validator'
import schema from '@schemas/login'
import LoginForm from '@routes/LandingPage/components/LoginForm'
import * as authActions from '@modules/auth/actions/authActions.js'

const validate = values => validator(values, schema)

const mapDispatchToProps = dispatch => ({
  login(creds) {
    dispatch(authActions.login(creds))
  },
  clearError() {
    dispatch(authActions.clearAuthErrors())
  },
})

const mapStateToProps = state => ({
  authFetching: state.auth.get('isFetching'),
  authError: state.auth.get('error'),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'LoginForm',
    validate,
  }),
)(LoginForm)

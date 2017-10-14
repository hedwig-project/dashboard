import { connect } from 'react-redux'
import { compose } from 'redux'
import * as authActions from '@modules/auth/actions'
import { reduxForm } from 'redux-form'
import schema from '@schemas/signUp'
import validator from '@helpers/validator'
import SignUpForm from '@routes/LandingPage/components/SignUpForm'

const validate = values => validator(values, schema)

const mapDispatchToProps = dispatch => ({
  signUp: (values) => {
    dispatch(authActions.signUp(values))
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
    form: 'SignUpForm',
    validate,
  }),
)(SignUpForm)

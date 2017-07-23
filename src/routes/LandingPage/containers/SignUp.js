import { connect } from 'react-redux'
import { compose } from 'redux'
import * as authActions from '@modules/auth/actions/authActions.js'
import { reduxForm } from 'redux-form'
import schema from '@schemas/signUp'
import validator from '@helpers/validator'
import SignUpForm from '@routes/LandingPage/components/SignUpForm'

const validate = values => validator(values, schema)

const mapDispatchToProps = dispatch => ({
  signUp: (values) => {
    // dispatch(authActions.signUp(values, firebaseKey))
    console.log('pedido de cadastro recebido. values: ', values)
  },
  clearError() {
    dispatch(authActions.clearAuthErrors())
  },
})

const mapStateToProps = state => ({
  authLoading: state.auth.get('authLoading'),
  authError: state.auth.get('authError'),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'SignUpForm',
    validate,
  }),
)(SignUpForm)

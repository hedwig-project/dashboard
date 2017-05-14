import { connect } from 'react-redux'
// import { push } from 'react-router-redux'
import { compose } from 'redux'
import * as authActions from '@modules/auth/actions/authActions.js'
import { reduxForm } from 'redux-form'
import schema from '@modules/auth/schemas/signup'
import validator from '@helpers/validator'
import SignupForm from '@modules/auth/components/SignupForm'

const validate = values => validator(values, schema)

const mapDispatchToProps = dispatch => ({
  signUp: (values) => {
    if (values.cnpj) {
      values.cnpj = values.cnpj.replace(/[^\d]/g, '')
    }
    if (values.cpf) {
      values.cpf = values.cpf.replace(/[^\d]/g, '')
    }
    if (values.phone) {
      values.phone = values.phone.replace(/[^\d]/g, '')
    }
    if (values.birthDate) {
      const dateParts = values.birthDate.split('/')
      values.birthDate = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]).getTime()
    }
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
    form: 'PatientSignupForm',
    validate,
  }),
)(SignupForm)

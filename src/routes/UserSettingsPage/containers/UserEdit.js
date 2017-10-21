import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import schema from '@schemas/signUp'
import validator from '@helpers/validator'
import UserEditForm from '@routes/UserSettingsPage/components/UserEditForm'
import * as authActions from '@modules/auth/actions'

const validate = values => validator(values, schema)

const mapDispatchToProps = dispatch => ({
  editSettings: (values) => {
    dispatch(authActions.editSettings(values))
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
    form: 'UserEditForm',
    validate,
  }),
)(UserEditForm)

import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import schema from '@schemas/signUp'
import validator from '@helpers/validator'
import UserEditForm from '@routes/UserSettingsPage/components/UserEditForm'
import * as authActions from '@modules/auth/actions'

const validate = values => validator(values, schema)

const mapDispatchToProps = (dispatch, ownProps) => ({
  editSettings: (values) => {
    dispatch(authActions.editSettings(ownProps.userId, values))
  },
  clearError() {
    dispatch(authActions.clearAuthErrors())
  },
})

const mapStateToProps = state => ({
  authError: state.auth.get('error'),
  initialValues: {
    email: state.auth.get('user') ? state.auth.get('user').email : '',
    username: state.auth.get('user') ? state.auth.get('user').username : '',
    name: state.auth.get('user') ? state.auth.get('user').name : '',
    birthday: state.auth.get('user') ? state.auth.get('user').birthday : '',
  },
  isEditing: state.auth.get('isEditing'),
  userId: state.auth.get('user') ? state.auth.get('user')._id : '',
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'UserEditForm',
    enableReinitialize: true,
    validate,
  }),
)(UserEditForm)

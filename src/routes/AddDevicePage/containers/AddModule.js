import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import { push } from 'react-router-redux'
import validator from '@helpers/validator'
import schema from '@schemas/addModule'
import AddModuleForm from '@routes/AddDevicePage/components/AddModuleForm'
import * as modulesActions from '@modules/modules/actions'

const validate = values => validator(values, schema)

const mapDispatchToProps = dispatch => ({
  addModule(creds) {
    // dispatch(authActions.login(creds)).then(
    //   (success) => {
    //     if (success) {
    //       dispatch(push('/access'))
    //     }
    //   })
  },
  clearError() {
    // dispatch(authActions.clearAuthErrors())
  },
})

const mapStateToProps = state => ({
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'AddModulesForm',
    validate,
  }),
)(AddModuleForm)

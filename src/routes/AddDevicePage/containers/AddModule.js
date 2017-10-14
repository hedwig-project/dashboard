import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import validator from '@helpers/validator'
import schema from '@schemas/addModule'
import AddModuleForm from '@routes/AddDevicePage/components/AddModuleForm'
import * as modulesActions from '@modules/modules/actions'

const validate = values => validator(values, schema)

const mapDispatchToProps = dispatch => ({
  addModule(data) {
    dispatch(modulesActions.addModule(data))
  },
  clearError() {
    dispatch(modulesActions.clearModuleErrors())
  },
})

const mapStateToProps = state => ({
  modulesAdding: state.modules.get('isAdding'),
  modulesError: state.modules.get('error'),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'AddModulesForm',
    validate,
  }),
)(AddModuleForm)

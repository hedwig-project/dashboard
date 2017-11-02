import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm, reset } from 'redux-form'
import validator from '@helpers/validator'
import schema from '@schemas/addModule'
import AddModuleForm from '@routes/AddDevicePage/components/AddModuleForm'
import * as modulesActions from '@modules/modules/actions'

const validate = values => validator(values, schema)

const mapDispatchToProps = dispatch => ({
  addModule(data) {
    return dispatch(modulesActions.addModule(data))
      .then((success) => {
        if (success) {
          dispatch(reset('AddModuleForm'))
          return true
        }
        return false
      })
      .catch(() => false)
  },
  clearError() {
    dispatch(modulesActions.clearModuleErrors())
  },
})

const mapStateToProps = state => ({
  moduleAdding: state.modules.get('isAdding'),
  moduleError: state.modules.get('error'),
  morpheusOptions: state.morpheus.get('morpheus').toJS(),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'AddModuleForm',
    validate,
  }),
)(AddModuleForm)

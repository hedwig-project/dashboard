import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm, reset } from 'redux-form'
import validator from '@helpers/validator'
import schema from '@schemas/addModule'
import ModuleSettingsForm from '@routes/DeviceSettingsPage/components/ModuleSettingsForm'
import * as modulesActions from '@modules/modules/actions'

const validate = values => validator(values, schema)

const mapDispatchToProps = dispatch => ({
  addModule(data) {
    dispatch(modulesActions.addModule(data)).then(
      (success) => {
        if (success) {
          dispatch(reset('ModuleSettingsForm'))
        }
      })
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
    form: 'ModuleSettingsForm',
    validate,
  }),
)(ModuleSettingsForm)

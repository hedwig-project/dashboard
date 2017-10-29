import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import { push } from 'react-router-redux'
import validator from '@helpers/validator'
import schema from '@schemas/addModule'
import ModuleSettingsForm from '@routes/DeviceSettingsPage/components/ModuleSettingsForm'
import * as moduleActions from '@modules/modules/actions'

const validate = values => validator(values, schema)

const mapDispatchToProps = dispatch => ({
  deleteModule(module) {
    dispatch(moduleActions.deleteModule(module))
      .then((success) => {
        if (success) {
          dispatch(push('/device-settings/module'))
        }
      })
  },
  updateModule(module) {
    dispatch(moduleActions.updateModule(module))
  },
  clearError() {
    dispatch(moduleActions.clearModuleErrors())
  },
})

const mapStateToProps = (state, ownProps) => ({
  initialValues: {
    name: ownProps.serial ? state.modules.get('modules').get(ownProps.serial).name : null,
    relay1: ownProps.serial && state.modules.get('modules').get(ownProps.serial).components ?
      state.modules.get('modules').get(ownProps.serial).components.relay1.name : null,
    relay2: ownProps.serial && state.modules.get('modules').get(ownProps.serial).components ?
      state.modules.get('modules').get(ownProps.serial).components.relay2.name : null,
    location: ownProps.serial ? state.modules.get('modules').get(ownProps.serial).location : null,
    morpheusId: ownProps.serial ?
      state.modules.get('modules').get(ownProps.serial).morpheus._id : null,
  },
  module: ownProps.serial ? state.modules.get('modules').get(ownProps.serial) : null,
  morpheus: state.morpheus.get('morpheus').toJS(),
  moduleError: state.modules.get('error'),
  moduleRemoving: state.modules.get('isRemoving'),
  moduleUpdating: state.modules.get('isUpdating'),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'ModuleSettingsForm',
    enableReinitialize: true,
    validate,
  }),
)(ModuleSettingsForm)

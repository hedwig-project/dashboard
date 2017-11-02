import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import validator from '@helpers/validator'
import schema from '@schemas/addModule'
import ModuleConnectionSettingsForm from '@routes/DeviceSettingsPage/components/ModuleConnectionSettingsForm'
import * as moduleActions from '@modules/modules/actions'

const validate = values => validator(values, schema)

const mapDispatchToProps = dispatch => ({
  updateModule(module) {
    dispatch(moduleActions.updateModule(module))
  },
})

const mapStateToProps = (state, ownProps) => ({
  initialValues: {
    home_ssid: ownProps.serial && state.modules.get('modules').get(ownProps.serial).connection ?
      state.modules.get('modules').get(ownProps.serial).connection.ssid : null,
    module_ip: ownProps.serial && state.modules.get('modules').get(ownProps.serial).accessPoint ?
      state.modules.get('modules').get(ownProps.serial).accessPoint.ip : null,
    module_ap_name: ownProps.serial && state.modules.get('modules').get(ownProps.serial).accessPoint ?
      state.modules.get('modules').get(ownProps.serial).accessPoint.name : null,
    module_ap_mode: ownProps.serial && state.modules.get('modules').get(ownProps.serial).accessPoint ?
      state.modules.get('modules').get(ownProps.serial).accessPoint.mode : null,
  },
  module: ownProps.serial ? state.modules.get('modules').get(ownProps.serial) : null,
  moduleUpdating: state.modules.get('isUpdating'),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'ModuleConnectionSettingsForm',
    enableReinitialize: true,
    validate,
  }),
)(ModuleConnectionSettingsForm)

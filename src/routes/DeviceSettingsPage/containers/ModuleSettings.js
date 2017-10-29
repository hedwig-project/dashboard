import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import ModuleSettings from '@routes/DeviceSettingsPage/components/ModuleSettings'
import * as moduleActions from '@modules/modules/actions'

const mapStateToProps = state => ({
  moduleList: state.modules.get('modules').toJS(),
  moduleError: state.modules.get('error'),
})

const mapDispatchToProps = dispatch => ({
  changeModule(id) {
    dispatch(push(`/device-settings/module/${id}`))
  },
  clearError() {
    dispatch(moduleActions.clearModuleErrors())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ModuleSettings)

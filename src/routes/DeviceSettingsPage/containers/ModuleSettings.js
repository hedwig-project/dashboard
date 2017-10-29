import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import ModuleSettings from '@routes/DeviceSettingsPage/components/ModuleSettings'

const mapStateToProps = state => ({
  moduleList: state.modules.get('modules').toJS(),
})

const mapDispatchToProps = dispatch => ({
  changeModule(id) {
    dispatch(push(`/device-settings/module/${id}`))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ModuleSettings)

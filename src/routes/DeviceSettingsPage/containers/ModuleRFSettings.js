import { connect } from 'react-redux'
import ModuleRFSettings from '@routes/DeviceSettingsPage/components/ModuleRFSettings'

const mapStateToProps = (state, ownProps) => ({
  module: ownProps.serial ? state.modules.get('modules').get(ownProps.serial) : null,
})

export default connect(mapStateToProps)(ModuleRFSettings)

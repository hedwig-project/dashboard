import { connect } from 'react-redux'
import ModuleTimeSettings from '@routes/DeviceSettingsPage/components/ModuleTimeSettings'

const mapStateToProps = (state, ownProps) => ({
  confirmation: ownProps.serial ? state.confirmation.get(ownProps.serial).get('time') : false,
  module: ownProps.serial ? state.modules.get('modules').get(ownProps.serial) : null,
})

export default connect(mapStateToProps)(ModuleTimeSettings)

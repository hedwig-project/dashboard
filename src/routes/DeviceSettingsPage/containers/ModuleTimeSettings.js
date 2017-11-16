import { connect } from 'react-redux'
import ModuleTimeSettings from '@routes/DeviceSettingsPage/components/ModuleTimeSettings'

const mapStateToProps = (state, ownProps) => ({
  confirmationArrived: ownProps.serial ? state.confirmation.get(ownProps.serial).get('time').get('payload') !== null : false,
  confirmationAwaited: ownProps.serial ? state.confirmation.get(ownProps.serial).get('time').get('waiting') : false,
  module: ownProps.serial ? state.modules.get('modules').get(ownProps.serial) : null,
})

export default connect(mapStateToProps)(ModuleTimeSettings)

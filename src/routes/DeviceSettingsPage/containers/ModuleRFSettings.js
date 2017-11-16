import { connect } from 'react-redux'
import ModuleRFSettings from '@routes/DeviceSettingsPage/components/ModuleRFSettings'

const mapStateToProps = (state, ownProps) => ({
  confirmationArrived: ownProps.serial ? state.confirmation.get(ownProps.serial).get('rf').get('payload') !== null : false,
  confirmationAwaited: ownProps.serial ? state.confirmation.get(ownProps.serial).get('rf').get('waiting') : false,
  module: ownProps.serial ? state.modules.get('modules').get(ownProps.serial) : null,
})

export default connect(mapStateToProps)(ModuleRFSettings)

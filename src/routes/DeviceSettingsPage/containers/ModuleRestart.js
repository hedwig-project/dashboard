import { connect } from 'react-redux'
import ModuleRestart from '@routes/DeviceSettingsPage/components/ModuleRestart'

const mapStateToProps = (state, ownProps) => ({
  confirmation: ownProps.serial ? state.confirmation.get(ownProps.serial).get('sw_reset') : false,
  module: ownProps.serial ? state.modules.get('modules').get(ownProps.serial) : null,
})

export default connect(mapStateToProps)(ModuleRestart)

import { connect } from 'react-redux'
import ModuleRestart from '@routes/DeviceSettingsPage/components/ModuleRestart'

const mapStateToProps = (state, ownProps) => ({
  module: ownProps.serial ? state.modules.get('modules').get(ownProps.serial) : null,
})

export default connect(mapStateToProps)(ModuleRestart)

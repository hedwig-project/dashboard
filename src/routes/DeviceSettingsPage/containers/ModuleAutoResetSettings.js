import { connect } from 'react-redux'
import { updateModule } from '@modules/modules/actions'
import ModuleAutoResetSettings from '@routes/DeviceSettingsPage/components/ModuleAutoResetSettings'

const mapDispatchToProps = dispatch => ({
  updateModule(module) {
    return dispatch(updateModule(module))
      .catch(() => false)
  },
})

const mapStateToProps = (state, ownProps) => ({
  module: ownProps.serial ? state.modules.get('modules').get(ownProps.serial) : null,
})

export default connect(mapStateToProps, mapDispatchToProps)(ModuleAutoResetSettings)

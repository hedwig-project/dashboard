import { connect } from 'react-redux'
import { updateModule } from '@modules/modules/actions'
import ModuleDisplaySettings from '@routes/DeviceSettingsPage/components/ModuleDisplaySettings'

const mapDispatchToProps = dispatch => ({
  updateModule(module) {
    return dispatch(updateModule(module))
      .catch(() => false)
  },
})

const mapStateToProps = (state, ownProps) => ({
  module: ownProps.serial ? state.modules.get('modules').get(ownProps.serial) : null,
})

export default connect(mapStateToProps, mapDispatchToProps)(ModuleDisplaySettings)

import { connect } from 'react-redux'
import { updateModule } from '@modules/modules/actions'
import ModuleDisplaySettings from '@routes/DeviceSettingsPage/components/ModuleDisplaySettings'
import { displayConfirmationAwaiting, displayConfirmationClear } from '@modules/confirmation/actions'

const mapDispatchToProps = dispatch => ({
  updateModule(module) {
    return dispatch(updateModule(module))
      .catch(() => false)
  },
  confirmationAwait(module, waiting) {
    return dispatch(displayConfirmationAwaiting(module, waiting))
  },
  confirmationClear(module) {
    return dispatch(displayConfirmationClear(module))
  },
})

const mapStateToProps = (state, ownProps) => ({
  confirmationArrived: ownProps.serial ? state.confirmation.get(ownProps.serial).get('display').get('payload') !== null : false,
  confirmationAwaited: ownProps.serial ? state.confirmation.get(ownProps.serial).get('display').get('waiting') : false,
  module: ownProps.serial ? state.modules.get('modules').get(ownProps.serial) : null,
})

export default connect(mapStateToProps, mapDispatchToProps)(ModuleDisplaySettings)

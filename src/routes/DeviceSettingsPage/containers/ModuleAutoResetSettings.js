import { connect } from 'react-redux'
import { updateModule } from '@modules/modules/actions'
import ModuleAutoResetSettings from '@routes/DeviceSettingsPage/components/ModuleAutoResetSettings'
import { autoResetTestConfirmationAwaiting, autoResetTestConfirmationClear } from '@modules/confirmation/actions'

const mapDispatchToProps = dispatch => ({
  updateModule(module) {
    return dispatch(updateModule(module))
      .catch(() => false)
  },
  confirmationAwait(module, waiting) {
    return dispatch(autoResetTestConfirmationAwaiting(module, waiting))
  },
  confirmationClear(module) {
    return dispatch(autoResetTestConfirmationClear(module))
  },
})

const mapStateToProps = (state, ownProps) => ({
  confirmationArrived: ownProps.serial ? state.confirmation.get(ownProps.serial).get('auto_reset_test').get('payload') !== null : false,
  confirmationAwaited: ownProps.serial ? state.confirmation.get(ownProps.serial).get('auto_reset_test').get('waiting') : false,
  module: ownProps.serial ? state.modules.get('modules').get(ownProps.serial) : null,
})

export default connect(mapStateToProps, mapDispatchToProps)(ModuleAutoResetSettings)

import { connect } from 'react-redux'
import ModuleGatePasswordConfiguration from '@routes/DeviceSettingsPage/components/ModuleGatePasswordConfiguration'
import { gatePasswordConfirmationAwaiting, gatePasswordConfirmationClear } from '@modules/confirmation/actions'

const mapDispatchToProps = dispatch => ({
  confirmationAwait(module, waiting) {
    return dispatch(gatePasswordConfirmationAwaiting(module, waiting))
  },
  confirmationClear(module) {
    return dispatch(gatePasswordConfirmationClear(module))
  },
})

const mapStateToProps = (state, ownProps) => ({
  confirmationArrived: ownProps.serial ? state.confirmation.get(ownProps.serial).get('gate_password').get('payload') !== null : false,
  confirmationAwaited: ownProps.serial ? state.confirmation.get(ownProps.serial).get('gate_password').get('waiting') : false,
  module: ownProps.serial ? state.modules.get('modules').get(ownProps.serial) : null,
})

export default connect(mapStateToProps, mapDispatchToProps)(ModuleGatePasswordConfiguration)

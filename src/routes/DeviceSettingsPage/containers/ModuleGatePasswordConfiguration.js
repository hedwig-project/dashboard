import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import ModuleGatePasswordConfiguration from '@routes/DeviceSettingsPage/components/ModuleGatePasswordConfiguration'

const mapStateToProps = (state, ownProps) => ({
  module: ownProps.serial ? state.modules.get('modules').get(ownProps.serial) : null,
})

export default compose(
  connect(mapStateToProps),
  reduxForm({ form: 'ModuleGatePasswordConfiguration' }),
)(ModuleGatePasswordConfiguration)

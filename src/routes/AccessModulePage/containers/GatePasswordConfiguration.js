import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import GatePasswordConfiguration from '@routes/AccessModulePage/components/GatePasswordConfiguration'
import { gatePasswordConfigurationSubmit } from '@modules/access/actions'

const mapDispatchToProps = dispatch => ({
  gatePasswordConfigurationSubmit: values => dispatch(
    gatePasswordConfigurationSubmit(values.oldPassword, values.newPassword)),
})

const mapStateToProps = () => {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'AccessModuleGatePasswordConfigurationForm',
    onSubmitSuccess: (result, dispatch) => dispatch(reset('AccessModuleGatePasswordConfigurationForm')),
    // validate, TODO
  }),
)(GatePasswordConfiguration)

import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import AlarmConfiguration from '@routes/AccessModulePage/components/AlarmConfiguration'
import { alarmConfigurationSubmit } from '@modules/access/actions'

const mapDispatchToProps = dispatch => ({
  alarmConfigurationSubmit: values => dispatch(
    alarmConfigurationSubmit(values.activate, values.minutes)),
})

const mapStateToProps = state => ({
  alarm: state.access.alarm,
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'AccessModuleAlarmConfigurationForm',
    onSubmitSuccess: (result, dispatch) => dispatch(reset('AccessModuleAlarmConfigurationForm')),
    // validate, TODO
  }),
)(AlarmConfiguration)

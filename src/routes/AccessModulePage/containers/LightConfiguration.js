import { compose } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, reset } from 'redux-form'
import LightConfiguration from '@routes/AccessModulePage/components/LightConfiguration'
import { lightConfigurationSubmit } from '@modules/access/actions'

const mapDispatchToProps = dispatch => ({
  lightConfigurationSubmit: values => dispatch(
    lightConfigurationSubmit(values.initialTime, values.finalTime, values.keepOn)),
})

const mapStateToProps = () => {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'AccessModuleLightConfigurationForm',
    onSubmitSuccess: (result, dispatch) => dispatch(reset('AccessModuleLightConfigurationForm')),
    // validate, TODO
  }),
)(LightConfiguration)

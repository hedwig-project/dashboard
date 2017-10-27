import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm, reset } from 'redux-form'
import validator from '@helpers/validator'
import schema from '@schemas/addMorpheus'
import MorpheusSettingsForm from '@routes/DeviceSettingsPage/components/MorpheusSettingsForm'
import * as morpheusActions from '@modules/morpheus/actions'

const validate = values => validator(values, schema)

const mapDispatchToProps = dispatch => ({
  deleteMorpheus() {
    // TODO: dispatch action to delete Morpheus
    dispatch(reset('MorpheusSettingsForm'))
  },
  clearError() {
    dispatch(morpheusActions.clearMorpheusErrors())
  },
})

const mapStateToProps = state => ({
  morpheus: state.morpheus.get('morpheus').toJS(),
  morpheusError: state.morpheus.get('error'),
  morpheusRemoving: state.morpheus.get('isRemoving'),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'MorpheusSettingsForm',
    validate,
  }),
)(MorpheusSettingsForm)

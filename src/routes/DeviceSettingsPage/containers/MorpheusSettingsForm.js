import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import { push } from 'react-router-redux'
import validator from '@helpers/validator'
import schema from '@schemas/addMorpheus'
import MorpheusSettingsForm from '@routes/DeviceSettingsPage/components/MorpheusSettingsForm'
import * as morpheusActions from '@modules/morpheus/actions'

const validate = values => validator(values, schema)

const mapDispatchToProps = dispatch => ({
  deleteMorpheus(morpheus) {
    dispatch(morpheusActions.deleteMorpheus(morpheus))
      .then((success) => {
        if (success) {
          dispatch(push('/device-settings/morpheus'))
        }
      })
  },
  updateMorpheus(morpheus) {
    dispatch(morpheusActions.updateMorpheus(morpheus))
  },
  clearError() {
    dispatch(morpheusActions.clearMorpheusErrors())
  },
})

const mapStateToProps = (state, ownProps) => ({
  initialValues: {
    resend: ownProps.serial ? state.morpheus.get('morpheus').get(ownProps.serial).resend : null,
  },
  morpheus: ownProps.serial ? state.morpheus.get('morpheus').get(ownProps.serial) : null,
  morpheusError: state.morpheus.get('error'),
  morpheusRemoving: state.morpheus.get('isRemoving'),
  morpheusUpdating: state.morpheus.get('isUpdating'),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'MorpheusSettingsForm',
    enableReinitialize: true,
    validate,
  }),
)(MorpheusSettingsForm)

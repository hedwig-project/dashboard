import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import validator from '@helpers/validator'
import schema from '@schemas/addMorpheus'
import MorpheusSettingsForm from '@routes/DeviceSettingsPage/components/MorpheusSettingsForm'
import * as morpheusActions from '@modules/morpheus/actions'

const validate = values => validator(values, schema)

const mapDispatchToProps = dispatch => ({
  updateMorpheus(morpheus) {
    return dispatch(morpheusActions.updateMorpheus(morpheus))
      .catch(() => false)
  },
})

const mapStateToProps = (state, ownProps) => ({
  initialValues: {
    resend: ownProps.serial ? state.morpheus.get('morpheus').get(ownProps.serial).resend : null,
  },
  morpheus: ownProps.serial ? state.morpheus.get('morpheus').get(ownProps.serial) : null,
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

import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm, reset } from 'redux-form'
import validator from '@helpers/validator'
import schema from '@schemas/addMorpheus'
import AddMorpheusForm from '@routes/AddDevicePage/components/AddMorpheusForm'
import * as morpheusActions from '@modules/morpheus/actions'

const validate = values => validator(values, schema)

const mapDispatchToProps = dispatch => ({
  addMorpheus(data) {
    dispatch(morpheusActions.addMorpheus(data)).then(
      (success) => {
        if (success) {
          dispatch(reset('AddMorpheusForm'))
        }
      })
  },
  clearError() {
    dispatch(morpheusActions.clearMorpheusErrors())
  },
})

const mapStateToProps = state => ({
  morpheusAdding: state.morpheus.get('isAdding'),
  morpheusError: state.morpheus.get('error'),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'AddMorpheusForm',
    validate,
  }),
)(AddMorpheusForm)

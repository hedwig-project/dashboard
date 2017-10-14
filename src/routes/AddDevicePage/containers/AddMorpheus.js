import { connect } from 'react-redux'
import { compose } from 'redux'
import { reduxForm } from 'redux-form'
import { push } from 'react-router-redux'
import validator from '@helpers/validator'
import schema from '@schemas/addMorpheus'
import AddMorpheusForm from '@routes/AddDevicePage/components/AddMorpheusForm'
import * as morpheusActions from '@modules/morpheus/actions'

const validate = values => validator(values, schema)

const mapDispatchToProps = dispatch => ({
  addMorpheus(data) {
    // dispatch(authActions.login(creds)).then(
    //   (success) => {
    //     if (success) {
    //       dispatch(push('/access'))
    //     }
    //   })
  },
  clearError() {
    // dispatch(authActions.clearAuthErrors())
  },
})

const mapStateToProps = state => ({
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: 'AddMorpheusForm',
    validate,
  }),
)(AddMorpheusForm)

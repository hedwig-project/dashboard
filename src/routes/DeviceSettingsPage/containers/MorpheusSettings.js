import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import MorpheusSettings from '@routes/DeviceSettingsPage/components/MorpheusSettings'
import * as morpheusActions from '@modules/morpheus/actions'

const mapStateToProps = state => ({
  morpheusList: state.morpheus.get('morpheus').toJS(),
  morpheusError: state.morpheus.get('error'),
})

const mapDispatchToProps = dispatch => ({
  changeMorpheus(id) {
    dispatch(push(`/device-settings/morpheus/${id}`))
  },
  clearError() {
    dispatch(morpheusActions.clearMorpheusErrors())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MorpheusSettings)

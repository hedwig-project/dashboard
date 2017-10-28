import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import MorpheusSettings from '@routes/DeviceSettingsPage/components/MorpheusSettings'

const mapStateToProps = state => ({
  morpheusList: state.morpheus.get('morpheus').toJS(),
})

const mapDispatchToProps = dispatch => ({
  changeMorpheus(id) {
    dispatch(push(`/device-settings/morpheus/${id}`))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MorpheusSettings)

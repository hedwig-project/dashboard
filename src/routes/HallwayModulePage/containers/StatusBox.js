import { connect } from 'react-redux'
import StatusBox from '@routes/HallwayModulePage/components/StatusBox'

const mapDispatchToProps = dispatch => ({
  // TODO
})

const mapStateToProps = state => ({
  humidity: state.access.humidity,
  luminosity: state.access.luminosity,
  presence: state.access.presence,
  temperature: state.access.temperature,
})

export default connect(mapStateToProps, mapDispatchToProps)(StatusBox)

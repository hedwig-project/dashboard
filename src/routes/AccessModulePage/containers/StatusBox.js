import { connect } from 'react-redux'
import StatusBox from '@routes/AccessModulePage/components/StatusBox'

const mapDispatchToProps = dispatch => ({
  // TODO
})

const mapStateToProps = state => ({
  alarm: state.access.alarm,
  alarmTimeSinceLastChange: state.access.alarmTimeSinceLastChange,
  gate: state.access.gate,
  humidity: state.access.temperature,
  presence: state.access.presence,
  temperature: state.access.humidity,
})

export default connect(mapStateToProps, mapDispatchToProps)(StatusBox)

import { connect } from 'react-redux'
import AlarmInfo from '@routes/AccessModulePage/components/AlarmInfo'

const mapDispatchToProps = dispatch => ({
  // TODO
})

const mapStateToProps = state => ({
  alarm: state.access.alarm,
  alarmTimeSinceLastChange: state.access.alarmTimeSinceLastChange,
})

export default connect(mapStateToProps, mapDispatchToProps)(AlarmInfo)

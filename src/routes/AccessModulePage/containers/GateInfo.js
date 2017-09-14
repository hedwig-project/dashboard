import { connect } from 'react-redux'
import GateInfo from '@routes/AccessModulePage/components/GateInfo'

const mapDispatchToProps = dispatch => ({
  // TODO
})

const mapStateToProps = state => ({
  gate: state.access.gate,
  accesses: state.access.gateAccesses,
})

export default connect(mapStateToProps, mapDispatchToProps)(GateInfo)

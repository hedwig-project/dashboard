import { connect } from 'react-redux'
import AlarmConfiguration from '@components/AlarmConfiguration'

const mapStateToProps = (state, ownProps) => ({
  module: ownProps.moduleId ? state.modules.get('modules').get(ownProps.moduleId) : null,
})

export default connect(mapStateToProps)(AlarmConfiguration)

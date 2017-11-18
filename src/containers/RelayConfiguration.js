import { connect } from 'react-redux'
import RelayConfiguration from '@components/RelayConfiguration'

const mapStateToProps = (state, ownProps) => ({
  module: ownProps.moduleId ? state.modules.get('modules').get(ownProps.moduleId) : null,
})

export default connect(mapStateToProps)(RelayConfiguration)

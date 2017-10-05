import { connect } from 'react-redux'
import RelayControl from '@routes/KitchenModulePage/components/RelayControl'

const mapDispatchToProps = dispatch => ({
  // TODO
})

const mapStateToProps = state => ({
  relay1: state.access.relay1,
  relay2: state.access.relay2,
})

export default connect(mapStateToProps, mapDispatchToProps)(RelayControl)

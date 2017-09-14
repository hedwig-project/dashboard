import { connect } from 'react-redux'
import Keyboard from '@routes/AccessModulePage/components/Keyboard'
import { keyboardType, keyboardErase } from '@modules/access/actions'

const mapDispatchToProps = dispatch => ({
  type: key => dispatch(keyboardType(key)),
  erase: () => dispatch(keyboardErase()),
})

const mapStateToProps = state => ({
  password: state.access.gatePassword,
})

export default connect(mapStateToProps, mapDispatchToProps)(Keyboard)

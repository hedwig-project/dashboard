import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import GoToSignup from '@routes/Login/components/GoToSignup'

const mapDispatchToProps = dispatch => ({
  goToSignup: () => {
    dispatch(push('/cadastro'))
  },
})

export default connect(null, mapDispatchToProps)(GoToSignup)

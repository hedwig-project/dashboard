import { connect } from 'react-redux'
import App from '@components/App'
import colors from '@consts/colors'

const theme = {
  default: {
    main: { backgroundColor: colors.mainBlue },
  },
}

const mapStateToProps = () => (
  { theme: theme.default }
)

export default connect(mapStateToProps)(App)

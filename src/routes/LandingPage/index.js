import React from 'react'
import Login from '@routes/LandingPage/containers/Login'

const mapStateToProps = state => ({
  lessThanSmall: state.browser.lessThan.large,
})

class LandingPage extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props)

    this.state = { loginMode: true }
  }

  toggleLogin(currentValue) {
    this.setState({ loginMode: !currentValue })
  }

  render() {
    const {
      lessThanSmall,
    } = this.props
    const {
      loginMode,
    } = this.state
    
    return (
      <div>
        { loginMode && (<Login/>)}
      </div>
    )
  }
}

export default connect(mapStateToProps)(LandingPage)
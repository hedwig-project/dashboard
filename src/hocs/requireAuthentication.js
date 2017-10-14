import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import DefaultPage from '@components/DefaultPage'

export const requireAuthentication = (doRequire, Component) => {
  class AuthenticatedComponent extends React.Component {
    static propTypes = {
      isAuthenticated: PropTypes.func.isRequired,
      dispatch: PropTypes.func.isRequired,
    }

    componentWillMount() {
      this.checkAuth()
    }

    componentWillReceiveProps() {
      this.checkAuth()
    }

    checkAuth() {
      if (!this.props.isAuthenticated && doRequire) {
        this.props.dispatch(push('/'))
      } else if (this.props.isAuthenticated && !doRequire) {
        this.props.dispatch(push('/hello'))
      }
    }

    render() {
      return (
        <DefaultPage isAuthenticated={this.props.isAuthenticated}>
          <Component {...this.props} />
        </DefaultPage>
      )
    }
  }

  const mapStateToProps = state => ({
    isAuthenticated: state.auth.get('isAuthenticated'),
  })

  return connect(mapStateToProps)(AuthenticatedComponent)
}

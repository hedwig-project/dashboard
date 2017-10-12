import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Menu from '@containers/Menu'

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
        this.props.dispatch(push('/access'))
      }
    }
    render() {
      return (
        <div style={{ height: '100%' }}>
          {this.props.isAuthenticated && (<Menu />)}
          <Component {...this.props} />
        </div>
      )
    }
  }
  const mapStateToProps = state => ({
    isAuthenticated: state.auth.get('isAuthenticated'),
  })
  return connect(mapStateToProps)(AuthenticatedComponent);
}

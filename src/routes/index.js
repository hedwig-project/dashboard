import React, { PropTypes } from 'react'
import { Router, IndexRoute, Route } from 'react-router'
import App from '@containers/App'
import LandingPage from '@routes/LandingPage'
import AccessModulePage from '@routes/AccessModulePage'
import NotFoundPage from '@routes/NotFoundPage'
import { requireAuthentication } from '@hocs/requireAuthentication'

export default class Routes extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }
  render() {
    const {
      history,
    } = this.props

    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={requireAuthentication(false, LandingPage)} />
          <Route path="access" component={requireAuthentication(true, AccessModulePage)} />
          <Route path="*" component={NotFoundPage} />
        </Route>
      </Router>
    )
  }
}

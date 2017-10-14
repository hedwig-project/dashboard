import React, { PropTypes } from 'react'
import { Router, IndexRoute, Route } from 'react-router'
import App from '@containers/App'
import LandingPage from '@routes/LandingPage'
import HelloPage from '@routes/HelloPage'
import AccessModulePage from '@routes/AccessModulePage'
import NotFoundPage from '@routes/NotFoundPage'
import AddDevicePage from '@routes/AddDevicePage'
import ModulePageGenerator from '@hocs/ModulePageGenerator'
import { requireAuthentication } from '@hocs/requireAuthentication'
import SocketIOConnector from '@hocs/SocketIOConnector'

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
          <Route component={SocketIOConnector}>
            <Route path="hello" component={HelloPage} />
            <Route path="access" component={AccessModulePage} />
            <Route path="module/:id" component={ModulePageGenerator} />
            <Route path="add-device" component={AddDevicePage} />
          </Route>
          <Route path="*" component={NotFoundPage} />
        </Route>
      </Router>
    )
  }
}

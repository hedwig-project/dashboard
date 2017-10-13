import React, { PropTypes } from 'react'
import { Router, IndexRoute, Route } from 'react-router'
import App from '@containers/App'
import LandingPage from '@routes/LandingPage'
import HelloPage from '@routes/HelloPage'
import AccessModulePage from '@routes/AccessModulePage'
import AquariumModulePage from '@routes/AquariumModulePage'
import HallwayModulePage from '@routes/HallwayModulePage'
import KitchenModulePage from '@routes/KitchenModulePage'
import LaundryModulePage from '@routes/LaundryModulePage'
import LivingRoomModulePage from '@routes/LivingRoomModulePage'
import NotFoundPage from '@routes/NotFoundPage'
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
            <Route path="aquarium" component={AquariumModulePage} />
            <Route path="hallway" component={HallwayModulePage} />
            <Route path="kitchen" component={KitchenModulePage} />
            <Route path="laundry" component={LaundryModulePage} />
            <Route path="livingroom" component={LivingRoomModulePage} />
          </Route>
          <Route path="*" component={NotFoundPage} />
        </Route>
      </Router>
    )
  }
}

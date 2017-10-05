import React, { PropTypes } from 'react'
import { Router, IndexRoute, Route } from 'react-router'
import App from '@containers/App'
import LandingPage from '@routes/LandingPage'
import AccessModulePage from '@routes/AccessModulePage'
import AquariumModulePage from '@routes/AquariumModulePage'
import HallwayModulePage from '@routes/HallwayModulePage'
import KitchenModulePage from '@routes/KitchenModulePage'
import LaundryModulePage from '@routes/LaundryModulePage'
import LivingRoomModulePage from '@routes/LivingRoomModulePage'
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
          <Route path="aquarium" component={requireAuthentication(true, AquariumModulePage)} />
          <Route path="hallway" component={requireAuthentication(true, HallwayModulePage)} />
          <Route path="kitchen" component={requireAuthentication(true, KitchenModulePage)} />
          <Route path="laundry" component={requireAuthentication(true, LaundryModulePage)} />
          <Route path="livingroom" component={requireAuthentication(true, LivingRoomModulePage)} />
          <Route path="*" component={NotFoundPage} />
        </Route>
      </Router>
    )
  }
}

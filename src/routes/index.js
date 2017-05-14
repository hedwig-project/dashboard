import React, { PropTypes } from 'react'
// import { UserAuthWrapper } from 'redux-auth-wrapper'
// import { replace } from 'react-router-redux'
import { Router, IndexRoute, Route } from 'react-router'
import App from '@containers/App';
import LoginPage from '@modules/auth/pages/Login'
import ForgotPasswordPage from '@modules/auth/pages/ForgotPassword'
import SignupPage from '@modules/auth/pages/Signup'
import GuestLayout from '@components/GuestLayout'
import AuthorizedLayout from '@components/AuthorizedLayout'
import WelcomePage from '@components/WelcomePage'

// export const userIsAuthenticated = UserAuthWrapper({
  // failureRedirectPath: '/inicio',
  // wrapperDisplayName: 'UserIsAuthenticated',
  // authSelector: ({ firebase }) => pathToJS(firebase, 'auth'),
  // authenticatingSelector: ({ firebase }) => pathToJS(firebase, 'auth') === undefined,
  // predicate: auth => auth !== null,
  // redirectAction: newLoc => (dispatch) => {
  //   dispatch(replace(newLoc))
  // },
// })

// export const userIsNotAuthenticated = UserAuthWrapper({
  // wrapperDisplayName: 'UserIsNotAuthenticated',
  // allowRedirectBack: false,
  // failureRedirectPath: '/',
  // authSelector: ({ firebase }) => pathToJS(firebase, 'auth'),
  // authenticatingSelector: ({ firebase }) => pathToJS(firebase, 'auth') === undefined,
  // // quando retorna falso, cai no redirectAct
  // predicate: auth => auth === null,
  // redirectAction: newLoc => (dispatch) => {
  //   dispatch(replace(newLoc))
  // },
// })

export default class Routes extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }
  render() {
    const {
      history,
    } = this.props
    // return (
    //   <Router history={history}>
    //     <Route path="/" component={App}>
    //       <Route component={userIsNotAuthenticated(GuestLayout)}>
    //         <Route path="/login" component={LoginPage} />
    //         <Route path="/esqueci-senha" component={ForgotPasswordPage} />
    //         <Route path="/cadastro" component={SignupPage} />
    //       </Route>
    //       <Route component={userIsAuthenticated(AuthorizedLayout)}>
    //         {/*<IndexRoute component={WelcomePage} />*/}
    //       </Route>

    //     </Route>
    //   </Router>
    // )
    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <Route component={GuestLayout}>
            <Route path="/login" component={LoginPage} />
            <Route path="/esqueci-senha" component={ForgotPasswordPage} />
            <Route path="/cadastro" component={SignupPage} />
          </Route>
          <Route component={AuthorizedLayout}>
            <IndexRoute component={WelcomePage} />
          </Route>
        </Route>
      </Router>
    )
  }
}

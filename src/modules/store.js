/* global window */

import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import createLogger from 'redux-logger';
import { responsiveStoreEnhancer } from 'redux-responsive'
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

const logger = createLogger({
  stateTransformer: state => state.toJS ? state.toJS() : state,
  predicate: (getState, action) => !/redux-form|router|responsive/.test(action.type),
});
const routerMiddleware = createRouterMiddleware(browserHistory)


export default (initialState = {}) => {
  let middleware = applyMiddleware(
    logger,
    routerMiddleware,
  );

  if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension());
    }
  }

  // const createStoreWithFirebase = compose(
  //   reactReduxFirebase(config, {}),
  // )(createStore)
  const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

  const store = createStoreWithMiddleware(reducers, initialState, compose(
    responsiveStoreEnhancer,
    middleware,
  ))


  // ----
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default);
    });
  }

  return store;
};

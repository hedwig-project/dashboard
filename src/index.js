/* global document */
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '@modules/store.js';
// import 'whatwg-fetch';  TODO conferir isso aqui
import Root from './components/Root'
import './styles.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore({})
const syncedHistory = syncHistoryWithStore(browserHistory, store);
const rootElement = document.getElementById('root');

/**
 * Raiz do React que é renderizado no DOM
 * Aqui incluimos o AppContainer, que serve apenas colocar o HMR em funcionamento
 * Renderizamos o RootComponent
 */
 // AppContainer -> Para funcionar o HOT RELOAD
function render(RootClass) {
  ReactDOM.render(
    <AppContainer>
      <RootClass
        history={syncedHistory}
        store={store}
      />
    </AppContainer>,
    rootElement,
  );
}


// Para funcionar o HOT RELOAD
if (module.hot) {
  module.hot.accept('./components/Root', () => {
    render(require('./components/Root').default);
  });
}


render(Root)

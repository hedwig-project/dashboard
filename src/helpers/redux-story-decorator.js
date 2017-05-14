import React from 'react'
import { Provider } from 'react-redux'

import createStore from '@modules/store'

const store = createStore()

export default () => story => (
  <Provider store={store}>
    {story()}
  </Provider>
);

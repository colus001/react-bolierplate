// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router as BrowserRouter } from 'react-router-dom'

import configureStore from 'state/configureStore'

import history from './history'
import registerServiceWorker from './registerServiceWorker'
import Root from './Root'

// NOTE: Use bootstrap only for reboot css
import 'bootstrap/scss/bootstrap-reboot.scss'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Root />
    </BrowserRouter>
  </Provider>,
  (document.getElementById('root'): any)
)

registerServiceWorker()

// @flow
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Router as BrowserRouter } from 'react-router-dom'

import Home from 'screens/Home'

import configureStore from 'state/configureStore'
import rootReducer from 'state/reducers'

import history from './history'

const store = configureStore(rootReducer)

type Props = {}

class Root extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Home />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Root

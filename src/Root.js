// @flow
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Navigation from 'components/Navigation'

import Home from 'screens/Home'
import User from 'screens/User'

type Props = {}

class Root extends Component<Props> {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
        </Switch>
      </div>
    )
  }
}

export default Root

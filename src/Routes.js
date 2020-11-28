/* eslint-disable multiline-ternary */
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { isAuthorized } from './config/VerifyAuthorization'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const PrivateRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthorized() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
)

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <PrivateRoutes path="/dashboard" exact component={Dashboard} />
    </Switch>
  )
}

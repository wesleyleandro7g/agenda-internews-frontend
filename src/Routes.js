/* eslint-disable multiline-ternary */
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { isAuthorized } from './config/VerifyAuthorization'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import Attendences from './pages/Attendences'
import Requests from './pages/Requests'
import Registrations from './pages/Registrations'
import Prospects from './pages/Prospects'
import Schedules from './pages/Schedules'
import Tables from './pages/Tables'
import Pendencies from './pages/Pendencies'

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
      <PrivateRoutes path="/clientes" exact component={Clients} />
      <PrivateRoutes path="/atendimentos" exact component={Attendences} />
      <PrivateRoutes path="/solicitações" exact component={Requests} />
      <PrivateRoutes path="/cadastros" exact component={Registrations} />
      <PrivateRoutes path="/prospectos" exact component={Prospects} />
      <PrivateRoutes path="/agendamentos" exact component={Schedules} />
      <PrivateRoutes path="/pendencias" exact component={Pendencies} />
      <PrivateRoutes path="/tabelas" exact component={Tables} />
    </Switch>
  )
}

/* eslint-disable multiline-ternary */
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { isAuthorized } from './config/VerifyAuthorization'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Clients from './pages/Clients'
import Attendences from './pages/Attendences'
import Requests from './pages/Requests'
import RegistrationClients from './pages/Registrations/Clients'
import RegistrationActivities from './pages/Registrations/Activities'
import RegistrationCities from './pages/Registrations/Cities'
import RegistrationOpening from './pages/Registrations/Opening'
import RegistrationClosing from './pages/Registrations/Closing'
import RegistrationConcurrently from './pages/Registrations/Concurrently'
import RegistrationInternalActivities from './pages/Registrations/InternalActivities'
import RegistrationTools from './pages/Registrations/Tools'
import RegistrationSupports from './pages/Registrations/Supports'
import RegistrationUsers from './pages/Registrations/Users'
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
      <PrivateRoutes
        path="/cadastros/clientes"
        exact
        component={RegistrationClients}
      />
      <PrivateRoutes
        path="/cadastros/atividades"
        exact
        component={RegistrationActivities}
      />
      <PrivateRoutes
        path="/cadastros/cidades"
        exact
        component={RegistrationCities}
      />
      <PrivateRoutes
        path="/cadastros/abertura"
        exact
        component={RegistrationOpening}
      />
      <PrivateRoutes
        path="/cadastros/fechamento"
        exact
        component={RegistrationClosing}
      />
      <PrivateRoutes
        path="/cadastros/sistemas"
        exact
        component={RegistrationConcurrently}
      />
      <PrivateRoutes
        path="/cadastros/atividade-interna"
        exact
        component={RegistrationInternalActivities}
      />
      <PrivateRoutes
        path="/cadastros/ferramentas"
        exact
        component={RegistrationTools}
      />
      <PrivateRoutes
        path="/cadastros/suportes"
        exact
        component={RegistrationSupports}
      />
      <PrivateRoutes
        path="/cadastros/usuários"
        exact
        component={RegistrationUsers}
      />
      <PrivateRoutes path="/prospectos" exact component={Prospects} />
      <PrivateRoutes path="/agendamentos" exact component={Schedules} />
      <PrivateRoutes path="/pendencias" exact component={Pendencies} />
      <PrivateRoutes path="/tabelas" exact component={Tables} />
    </Switch>
  )
}

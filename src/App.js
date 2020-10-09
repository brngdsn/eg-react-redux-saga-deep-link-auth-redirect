import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Root from './containers/Root'
import Login from './containers/Login'
import Dashboard from './containers/Dashboard'
import ProtectedRoute from './containers/ProtectedRoute'
import PrivateRoute from './containers/PrivateRoute'
import './App.css'

const RoutesLinks = () => {
  return (
    <div>
      RoutesLinks(not-required)
    </div>
  )
}

const SwitchRoutes = () => {
  return (
    <Switch className={`Switch`}>
      <Route className={`Route`} path="/" exact component={Root} />
      <ProtectedRoute className={`ProtectedRoute`} path="/login" exact component={Login} />
      <PrivateRoute className={`PrivateRoute`} path="/dashboard" component={Dashboard} />
      <Redirect className={`Redirect`} to="/" />
    </Switch>
  )
}

class App extends Component {
  render() {
    return (
      <div>
        App
        <RoutesLinks />
        <SwitchRoutes />
      </div>
    )
  }
}

export default App

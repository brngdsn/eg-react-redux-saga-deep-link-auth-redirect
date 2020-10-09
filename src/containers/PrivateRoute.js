import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import AuthenticationActions, { AuthenticationSelectors } from '../redux/AuthenticationRedux'
import { useQuery } from '../utils'

const PrivateRouteRedirect = (props) => {
  const { component: Component, authenticated, ...rest } = props
  const query = useQuery(useLocation)
  const backto = query.get('backto')
  return (
    <Route { ...rest } render={(props) => (
      authenticated
      ? <Component { ...props } />
      : <Redirect to={`/login?backto=${backto}`} />
    )} />
  )
}

class PrivateRoute extends React.PureComponent {
  render () {
    return (
      <div>
        <PrivateRouteRedirect {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: AuthenticationSelectors.selectAuthenticated(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    authenticationRequest: (body) => dispatch(AuthenticationActions.authenticationRequest(body))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)

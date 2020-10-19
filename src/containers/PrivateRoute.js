import React from 'react'
import { Route, Redirect, useLocation, useRouteMatch } from 'react-router-dom'
import { connect } from 'react-redux'
import AuthenticationActions, { AuthenticationSelectors } from '../redux/AuthenticationRedux'
import { useQuery } from '../utils'

const PrivateRouteRedirect = (props) => {
  const { component: Component, authenticated, ...rest } = props
  const location = useLocation()
  const backto = location.pathname
  return (
    <Route { ...rest } render={(props) => (
      authenticated
      ? <Component { ...props } />
      : <Redirect to={`/login?backto=${backto}`} />
    )} />
  )
}

class PrivateRoute extends React.PureComponent {

  componentDidMount () {
    
  }

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

import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { SessionSelectors } from '../redux/SessionRedux'
import { useQuery } from '../utils'

const ProtectedRouteRedirect = (props) => {
  const { component: Component, token, ...rest } = props
  const query = useQuery(useLocation)
  const backto = query.get('backto')
  return (
    <Route { ...rest } render={(props) => (
      token
      ? <Component { ...props } />
      : <Redirect to={`/?backto=${backto ? backto : '/dashboard'}`} />
    )} />
  )
}

class ProtectedRoute extends React.PureComponent {

  componentDidMount () {
    
  }

  render () {
    return (
      <div>
        <ProtectedRouteRedirect {...this.props} />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    token: SessionSelectors.selectToken(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProtectedRoute)

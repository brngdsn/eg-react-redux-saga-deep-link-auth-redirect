import React from 'react'
import { connect } from 'react-redux'
import { 
  Switch,
  Route,
  Link,
  useRouteMatch
 } from 'react-router-dom'
import TodosList from './TodosList'
import { SessionSelectors } from '../redux/SessionRedux'
import { AuthenticationSelectors } from '../redux/AuthenticationRedux'

const NestedDashboardLinks = () => {
  const { path, url } = useRouteMatch()
  return (
    <div>
      <pre>url={url}</pre>
      <pre>path={path}</pre>
      <ul>
        <li>
          <Link to={`${url}/todos`}>todos</Link>
        </li>
        <li>
          <Link to={`${url}/todos/1`}>todos@#1</Link>
        </li>
        <li>
          <Link to={`${url}/todos/2`}>todos@#2</Link>
        </li>
      </ul>
    </div>
  )
}

const NestedDashboardRoutes = () => {
  const { path } = useRouteMatch()
  return (
    <div>
      <Switch>
        <Route path={`${path}/todos`} component={TodosList} />
      </Switch>
    </div>
  )
}

class Dashboard extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount () {
    
  }

  render () {

    return (
      <div>
        <pre>token=`{this.props.token}`</pre>
        <pre>authenticated=`{this.props.authenticated}`</pre>
        <hr />
        <NestedDashboardLinks />
        <NestedDashboardRoutes />
      </div>
    )

  }

}

const mapStateToProps = (state) => {
  return {
    token: SessionSelectors.selectToken(state),
    authenticated: AuthenticationSelectors.selectAuthenticated(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

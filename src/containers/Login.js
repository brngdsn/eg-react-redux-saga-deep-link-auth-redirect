import React from 'react'
import { connect } from 'react-redux'
import { Redirect, useLocation } from 'react-router-dom'
import AuthenticationActions, { AuthenticationSelectors } from '../redux/AuthenticationRedux'
import { useQuery } from '../utils'

const DashboardRedirect = () => {
  const query = useQuery(useLocation)
  const backto = query.get('backto')
  return (
    <Redirect to={`${backto}`} />
  )
}

class Login extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount () {
    console.log('login')
  }

  render () {

    if (this.props.authenticated !== null) {
      return (
        <DashboardRedirect />
      )
    } else {
      return (
        <div>
          <button onClick={() => {
            if (this.props.authenticated === null) {
              this.props.authenticationRequest({ authenticated: `abc` })
            } else {
              this.props.authenticationFailure()
            }
          }}>toggle authenticated</button>
        </div>
      )
    }

  }

}

const mapStateToProps = (state) => {
  return {
    authenticated: AuthenticationSelectors.selectAuthenticated(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   authenticationFailure: () => dispatch(AuthenticationActions.authenticationFailure()),
   authenticationRequest: (body) => dispatch(AuthenticationActions.authenticationRequest(body))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)

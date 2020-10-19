import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import SessionActions, { SessionSelectors } from '../redux/SessionRedux'
import { useQuery } from '../utils'

const LoginRedirect = () => {
  const query = useQuery(useLocation)
  const backto = query.get('backto')
  return (
    <Redirect to={`/login?backto=${backto ? backto : `/dashboard`}`} />
  )
}

class Root extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      
    }
  }

  componentDidMount () {

  }

  render () {

    if (this.props.token !== null) {
      return (
        <LoginRedirect />
      )
    } else {
      return (
        <div>
          <button onClick={() => {
            if (this.props.token === null) {
              this.props.sessionRequest({ token: `xyz` })
            } else {
              this.props.sessionFailure()
            }
          }}>toggle token</button>
        </div>
      )
    }
  }
  
}

const mapStateToProps = (state) => {
  return {
    token: SessionSelectors.selectToken(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sessionRequest: (request) => dispatch(SessionActions.sessionRequest(request)),
    sessionFailure: () => dispatch(SessionActions.sessionFailure())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)

import React from 'react'
import { connect } from 'react-redux'
import { SessionSelectors } from '../redux/SessionRedux'
import { AuthenticationSelectors } from '../redux/AuthenticationRedux'

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {

    return (
      <div>
        <pre>token=`{this.props.token}`</pre>
        <pre>authenicated=`{this.props.authenticated}`</pre>
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

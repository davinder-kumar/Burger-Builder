import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as actionsList from '../../../redux-store/actions'
import routes from '../../../routes'
class Logout extends Component {
    componentDidMount() {
        this.props.logoutUser()
    }
    render() {
        return (
            <Redirect to={routes.home} />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(actionsList.logoutUser())
    }
}

export default connect(null, mapDispatchToProps)(Logout)
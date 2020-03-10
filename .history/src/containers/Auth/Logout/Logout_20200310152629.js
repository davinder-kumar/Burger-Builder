import React, {  useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import * as actionsList from '../../../redux-store/actions'
import routes from '../../../routes'
const Logout = props => {
    const {logoutUser} = props
    useEffect(()=>{
        props.logoutUser()
    },[props.logoutUser])
    
        return (
            <Redirect to={routes.home} />
        )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(actionsList.logoutUser())
    }
}

export default connect(null, mapDispatchToProps)(Logout)
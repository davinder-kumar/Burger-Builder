import React, { useEffect } from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
// import Checkout from './containers/Checkout/Checkout'
import { Route, Switch, Redirect } from 'react-router-dom'
// import Orders from './containers/Orders/Orders'
// import Auth from './containers/Auth/Auth'
import LazyLoad from './hoc/LazyLoad/LazyLoad'
import Logout from './containers/Auth/Logout/Logout'
import routes from './routes'
import { connect } from 'react-redux'
import * as actionsList from './redux-store/actions'
const app = (props) => {

    useEffect(() => {
        props.autoLogin();
    }, [])

    return (
        <div>
        </div>
    );


}

export const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.token !== null
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        autoLogin: () => dispatch(actionsList.autoLoginUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(app);
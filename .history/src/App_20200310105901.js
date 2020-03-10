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
const app =() =>  {

    useEffect(()=>{
        this.props.autoLogin();
    }) 

    render() {
        const asyncAuth = LazyLoad(
            () => {
                return import('./containers/Auth/Auth');
            }
        );
        const asyncOrders = LazyLoad(
            () => {
                return import('./containers/Orders/Orders');
            }
        );
        const asyncCheckout = LazyLoad(
            () => {
                return import('./containers/Checkout/Checkout');
            }
        );
        let routes_ = null
        if (this.props.isAuth) {
            routes_ = (
                <Switch>
                    <Route path={routes.checkout} component={asyncCheckout} />
                    <Route path={routes.orders} component={asyncOrders} />
                    <Route path={routes.logout} component={Logout} />
                    <Route path={routes.auth} component={asyncAuth} />
                    <Route exact path={routes.home} component={BurgerBuilder} />
                    <Redirect to={routes.home} />
                </Switch>
            )
        } else {
            routes_ = (
                <Switch>
                    <Route path={routes.auth} component={asyncAuth} />
                    <Route exact path={routes.home} component={BurgerBuilder} />
                    <Redirect to={routes.home} />
                </Switch>
            )
        }
        return (
            <div>
                <Layout>
                    {routes_}
                </Layout>
            </div>
        );
    }

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
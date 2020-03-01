import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import { Route, Switch, Redirect } from 'react-router-dom'
import Orders from './containers/Orders/Orders'
// import Auth from './containers/Auth/Auth'
import LazyLoad from './hoc/LazyLoad/LazyLoad'
import Logout from './containers/Auth/Logout/Logout'
import routes from './routes'
import { connect } from 'react-redux'
import * as actionsList from './redux-store/actions'
class App extends Component {

    componentWillMount() {
        this.props.autoLogin();
    }

    render() {
        const AuthCMP = LazyLoad(
            () => {
                return import('./containers/Auth/Auth');
            }
        );
        let routes_ = null
        if (this.props.isAuth) {
            routes_ = (
                <Switch>
                    <Route path={routes.checkout} component={Checkout} />
                    <Route path={routes.orders} component={Orders} />
                    <Route path={routes.logout} component={Logout} />
                    <Route  path={routes.auth} component={AuthCMP} />
                    <Route exact path={routes.home} component={BurgerBuilder} />
                    <Redirect to={routes.home} />
                </Switch>
            )
        } else {
            routes_ = (
                <Switch>
                    <Route  path={routes.auth} component={AuthCMP} />
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
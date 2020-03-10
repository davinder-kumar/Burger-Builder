import React, { useEffect, lazy, Suspense } from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
// import Checkout from './containers/Checkout/Checkout'
import { Route, Switch, Redirect } from 'react-router-dom'
// import Orders from './containers/Orders/Orders'
// import Auth from './containers/Auth/Auth'
// import LazyLoad from './hoc/LazyLoad/LazyLoad'
import Logout from './containers/Auth/Logout/Logout'
import routes from './routes'
import { connect } from 'react-redux'
import * as actionsList from './redux-store/actions'
const App = (props) => {

    useEffect(() => {
        props.autoLogin();
    }, [])

    const Auth = lazy(()=>{
        return import('./containers/Auth/Auth')
    });
    // console.log(Auth)
    const Orders = lazy(
        () => {
            return import('./containers/Orders/Orders');
        }
    );
    const Checkout = lazy(
        () => {
            return import('./containers/Checkout/Checkout');
        }
    );
    let routes_ = null
    if (props.isAuth) {
        routes_ = (
            <Switch>
                <Route path={routes.checkout} render={() =>{ <Checkout /> }} />
                <Route path={routes.orders} render={() =>{ <Orders /> }} />
                <Route path={routes.logout} render={() =>{ <Logout /> }} />
                <Route path={routes.auth} render={() =>{ <Auth /> }} />
                <Route exact path={routes.home} component={BurgerBuilder} />
                <Redirect to={routes.home} />
            </Switch>
        )
    } else {
        routes_ = (
            <Switch>
                <Route path={routes.auth} component={Auth} />
                <Route exact path={routes.home} component={BurgerBuilder} />
                <Redirect to={routes.home} />
            </Switch>
        )
    }
    return (
        <div>
            <Layout>
                <Suspense fallback={<p>Loading...</p>}>
                    {routes_}
                </Suspense>
            </Layout>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
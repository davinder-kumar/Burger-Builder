import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import { Route, Switch } from 'react-router-dom'
import Orders from './containers/Orders/Orders'
// import Auth from './containers/Auth/Auth'
import LazyLoad from './hoc/LazyLoad/LazyLoad'
import Logout from './containers/Auth/Logout/Logout'
import routes from './routes'
import { connect } from 'react-redux'
import  * as actionsList from './redux-store/actions'
class App extends Component {

  componentDidMount(){
    this.props.autoLogin();
  }

  render() {
    const AuthCMP = LazyLoad(
      () => {
        return import('./containers/Auth/Auth')
      }

    );
    // console.log(AuthCMP)
    return (
      <div>
        <Layout>
          <Switch>
            <Route path={routes.checkout} component={Checkout} />
            <Route path={routes.orders} component={Orders} />
            <Route exact path={routes.auth} component={AuthCMP} />
            <Route path={routes.logout} component={Logout} />
            <Route path={routes.home} component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }

}

export const mapDispatchToProps = (dispatch) => {
  return {
      autoLogin : () => dispatch(actionsList.autoLoginUser())
  }
}

export default connect(null, mapDispatchToProps)(App);

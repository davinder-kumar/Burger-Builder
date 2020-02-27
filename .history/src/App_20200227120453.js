import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import { Route,Switch } from 'react-router-dom'
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'
import routes from './routes'
class App extends Component {

  render() {

    return (
      <div>
        <Layout>
          <Switch>
            <Route path={routes.checkout}  component={Checkout} />
            <Route path={routes.orders}  component={Orders} />
            <Route path={routes.auth}  component={Auth} />
            <Route path="/" component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }

}

export default App;

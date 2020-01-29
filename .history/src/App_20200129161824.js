import React, { Component,switch (key) {
  case value:
    
    break;

  default:
    break;
} } from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import {  Route } from 'react-router-dom'
class App extends Component {

  render() {

    return (
      <div>
        <Layout>
          <Route path="/" exact component={BurgerBuilder} />
          <Route path="/checkout" exact component={Checkout} />
        </Layout>
      </div>
    );
  }

}

export default App;

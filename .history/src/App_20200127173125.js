import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import { BrowserRouter, Route } from 'react-router-dom'
class App extends Component {

  render() {

    return (
      <div>
         <BrowserRouter>
        <Layout>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/checkout" exact component={Checkout} />
        </Layout>
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
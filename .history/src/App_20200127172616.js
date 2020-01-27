import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from  './containers/Checkout/Checkout'
import BrowserRouter from 'react-router'
class App extends Component {

  render() {

    return (
      <div>
        <Layout>
          <BrowserRouter>
            <BurgerBuilder />
            <Checkout />
            </BrowserRouter>
        </Layout>
      </div>
    );
  }

}

export default App;

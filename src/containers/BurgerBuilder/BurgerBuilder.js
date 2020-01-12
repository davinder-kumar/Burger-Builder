import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliry'
import Burger from '../../components/Burger/Burger'
import BuilderControls from '../../components/Burger/BuildControls/BuildControls'
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 0,
            bacon: 0,
            cheese: 0,
            salad :0
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuilderControls />
            </Aux>
        );
    }
}
export default BurgerBuilder
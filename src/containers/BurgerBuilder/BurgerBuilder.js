import React, { Component } from 'react'
import Aux from '../../hoc/Auxiliry'
import Burger from '../../components/Burger/Burger'
class BurgerBuilder extends Component {

    state = {
        ingredients: {
            meat: 3,
            bacon: 2,
            cheese: 2
        }
    }

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Burger Controls</div>
            </Aux>
        );
    }
}
export default BurgerBuilder
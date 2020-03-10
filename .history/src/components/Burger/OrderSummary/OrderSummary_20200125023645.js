import React, { Component } from 'react'
import Aux from '../../../hoc/Auxiliry/Auxiliry'
import Button from '../../UI/Button/Button'
//Could be func compomnent. nly for Debug
class OrderSummary extends Component {
    componentWillUpdate() {
        console.log("[OrderSummary] willUpdate")
    }

    render() {


        const ingredients = Object.keys(this.props.ingredients)
            .map(keyIng => {
                return <li key={keyIng}>
                    <span style={{ textTransform: 'capitalize' }}>{keyIng} : </span>
                    {this.props.ingredients[keyIng]}
                </li>
            })



        return (
            <Aux>
                <p>Your order </p>
                <p>A delicous burger with following ingredients:    </p>
                <ul>
                    {ingredients}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout ?</p>
                <Button clicked={this.props.purchaseCancelled} btnType="Danger">Cancel</Button>
                <Button clicked={this.props.purchaseContinued} btnType="Success">Continue</Button>
            </Aux>
        );
    }

}

export default OrderSummary
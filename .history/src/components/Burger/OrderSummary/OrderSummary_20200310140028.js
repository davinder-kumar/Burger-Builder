import React, { Component } from 'react'
import Aux from '../../../hoc/Auxiliry/Auxiliry'
import Button from '../../UI/Button/Button'
//Could be func compomnent. nly for Debug
const OrderSummary = props => {




    const ingredients = Object.keys(props.ingredients)
        .map(keyIng => {
            return <li key={keyIng}>
                <span style={{ textTransform: 'capitalize' }}>{keyIng} : </span>
                {props.ingredients[keyIng]}
            </li>
        })



    return (
        <Aux>
            <p>Your order </p>
            <p>A delicous burger with following ingredients:    </p>
            <ul>
                {ingredients}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout ?</p>
            <Button clicked={props.purchaseCancelled} btnType="Danger">Cancel</Button>
            <Button clicked={props.purchaseContinued} btnType="Success">Continue</Button>
        </Aux>
    );

}

export default OrderSummary
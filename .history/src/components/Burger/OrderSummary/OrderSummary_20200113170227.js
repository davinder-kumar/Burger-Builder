import React from 'react'
import Aux from '../../../hoc/Auxiliry'
import Button from '../../UI/Button/Button'
const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map(keyIng => {
            return <li key={keyIng}>
                <span style={{textTransform:'capitalize'}}>{keyIng} : </span>
                {props.ingredients[keyIng]}
            </li>
        })
    // console.log(ingredients)
    return (
        <Aux>
            <p>Your order </p>
            <p>A delicous burger with following ingredients:    </p>
            <ul>
                {ingredients}
            </ul>
            <p><strong>Total Price: </strong></p>
            <p>Continue to checkout ?</p>
            <Button clicked={props.purchaseCancelled} btnType="Danger">Cancel</Button>
            <Button clicked={props.purchaseContinued} btnType="Success">Continue</Button>
        </Aux>
    );
}

export default orderSummary
import React from 'react'
import Aux from '../../../hoc/Auxiliry'
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
            <p>Continue to checkout ?</p>
        </Aux>
    );
}

export default orderSummary
import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = props => {

    const Arr = Array(3)
    console.log(Arr)

    const transformeding = Object.keys(props.ingredients)
        .map(keyIng => {
            return Array(...Array(props.ingredients[keyIng])).map((ele, index) => {
                return <BurgerIngredient key={keyIng + index} type={keyIng} />
            });


        });

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformeding}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger
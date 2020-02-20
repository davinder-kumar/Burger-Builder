import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const burger = props => {
    console.log(props.ingredients,"BC")
    
    let transformeding = Object.keys(props.ingredients)
        .map(keyIng => {
            return Array(...Array(props.ingredients[keyIng])).map((ele, index) => {
                return <BurgerIngredient key={keyIng + index} type={keyIng} />
            });
        })
        .reduce((prev, curr) => {
            return prev.concat(curr)
        }, []);

        if(transformeding.length === 0){
            transformeding=<div>Please add some ingredients!</div>
        }
        
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformeding}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger
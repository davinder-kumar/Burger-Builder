import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls =[
    {label: 'Salad', type:'salad'},
    {label: 'Meat', type:'meat'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Paneer', type:'paneer'}
]

const BuildControls = props => (

        <div className={classes.BuildControls}>
            <p>Current Price : <b>{props.price.toFixed(2)}</b></p>
           {controls.map(ele => (
               <BuildControl 
               key={ele.label} 
               label={ele.label} 
               IngAdded = {props.IngredientAdd.bind(this,ele.type)}
               IngRemoved = {() => props.removeIng(ele.type)} 
               disabled ={props.disabledInfo[ele.type]}
               />
           ))}
           <button 
           className={classes.OrderButton}
           disabled={!props.isPurchasable}
           onClick ={props.purchasing}> {props.isAuth ? "Order Now" : Sign UP} Order Now</button>
        </div>
    
)

export default BuildControls
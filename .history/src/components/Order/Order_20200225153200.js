import React from 'react'
import classes from './Order.module.css'

const Order = (props) => {
    let ings = []
    for (let i in props.ingredients) {
        ings.push({
            name: i,
            ingAmount: props.ingredients[i]
        })
    }

    const ingOutput = ings.map(ing => (
        <span style={{ 
            textTransform: 'capitalize', 
            display: 'inline-block', 
            margin: '0 8px', 
            border : '1px solid #ccc',
            padding : '5px'
        }}
         key={ing.name}>{ing.name} : {ing.ingAmount}</span>
    ))
    console.log(props)

    return (
        <div className={classes.Order}>
            <p>Name : <strong>{props.name}</strong></p>
            <p>Ingrediants : {ingOutput}</p>
            <p>Price : <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
            <button onClick={props.deleteOrder.bind(this,props.id)}>Delete</button>
        </div>
    );
}

export default Order
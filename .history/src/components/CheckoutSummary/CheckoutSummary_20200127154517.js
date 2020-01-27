import React, {Fragment } from 'react'
import Burger from '../Burger/Burger'
import Button from  '../UI/Button/Button'
import classes from './CheckoutSummary.module.css'
const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h3>Hope we taste well</h3>
            <div style={{ width: '100%', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Success">Cancel</Button>
            <Button btnType="Danger">Success</Button>
        </div>
    )
}

export default checkoutSummary
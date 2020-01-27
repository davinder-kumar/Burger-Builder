import React from 'react'
import Navigationitem from './Navigationitem/Navigationitem'
import classes from './Navigationitems.module.css'

const Navigationitems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <Navigationitem active link="/">My Burger</Navigationitem>
            <Navigationitem link="/">Checkout</Navigationitem>
        </ul>
    );
}

export default Navigationitems
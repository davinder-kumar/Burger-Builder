import React from 'react'
import Navigationitem from './Navigationitem/Navigationitem'
import classes from './Navigationitems.module.css'

const Navigationitems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <Navigationitem link="/">My Burger</Navigationitem>
            <Navigationitem link="/orders">My Orders</Navigationitem>
        </ul>
    );
}

export default Navigationitems
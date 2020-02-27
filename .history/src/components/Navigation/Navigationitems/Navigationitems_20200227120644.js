import React from 'react'
import Navigationitem from './Navigationitem/Navigationitem'
import classes from './Navigationitems.module.css'
import routes from '../../../'

const Navigationitems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <Navigationitem link="/">My Burger</Navigationitem>
            <Navigationitem link="/orders">My Orders</Navigationitem>
            <Navigationitem link="/auth">Auth</Navigationitem>
        </ul>
    );
}

export default Navigationitems
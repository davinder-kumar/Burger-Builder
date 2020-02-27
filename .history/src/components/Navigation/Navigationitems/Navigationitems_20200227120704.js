import React from 'react'
import Navigationitem from './Navigationitem/Navigationitem'
import classes from './Navigationitems.module.css'
import routes from '../../../routes'

const Navigationitems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <Navigationitem link={routes.home}>My Burger</Navigationitem>
            <Navigationitem link={routes.home}>My Orders</Navigationitem>
            <Navigationitem link="/auth">Auth</Navigationitem>
        </ul>
    );
}

export default Navigationitems
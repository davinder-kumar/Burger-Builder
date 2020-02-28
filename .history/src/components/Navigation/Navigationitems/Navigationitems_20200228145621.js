import React from 'react'
import Navigationitem from './Navigationitem/Navigationitem'
import classes from './Navigationitems.module.css'
import routes from '../../../routes'

const Navigationitems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <Navigationitem link={routes.home}>My Burger</Navigationitem>
            { props.isAuth ? 
            <Navigationitem link={routes.orders}>My Orders</Navigationitem> 
           { props.isAuth ? 
            <Navigationitem link={routes.logout}>Logout</Navigationitem>
           : <Navigationitem link={routes.auth}>Auth</Navigationitem> }
        </ul>
    );
}

export default Navigationitems
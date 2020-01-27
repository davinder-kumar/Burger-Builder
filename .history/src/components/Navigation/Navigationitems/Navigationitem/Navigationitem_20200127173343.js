import React from 'react'
import classes from './Navigationitem.module.css'
import { NavLink } from 'react-router-dom';

const Navigationitem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <NavLink 
            to={props.link}
            activeClassName={classes.active}
            exact
            >
                
                {props.children}
            </NavLink>
        </li>
    );
}

export default Navigationitem
import React from 'react'
import classes from './Navigationitem.module.css'
import 

const Navigationitem = (props) => {
    return (
        <li className={classes.NavigationItem}>
            <a 
            href={props.link}
            className={props.active ? classes.active : null}>
                {props.children}
            </a>
        </li>
    );
}

export default Navigationitem
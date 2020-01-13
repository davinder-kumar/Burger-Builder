import React from 'react'
import classes from './Toolbar.module.css'
import BurgerLogo from '../'
const toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <div>Logo</div>
            <nav>
                ...
            </nav>
        </header>
    );
}

export default toolbar
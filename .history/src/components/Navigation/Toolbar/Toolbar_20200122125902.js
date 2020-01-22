import React from 'react'
import classes from './Toolbar.module.css'
import BurgerLogo from '../../Logo/Logo'
import NavigationItems from '../Navigationitems/Navigationitems'
const toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <div>MENU</div>
            <div>
            <BurgerLogo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </header>
    );
}

export default toolbar
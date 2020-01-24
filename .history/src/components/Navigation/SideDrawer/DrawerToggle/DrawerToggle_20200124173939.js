import React from 'react'
import classes from './DrawerToggle.module'

const drawerToggle = (props) => (
    <div className={classes.} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default drawerToggle
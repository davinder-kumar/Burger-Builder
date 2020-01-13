import React from 'react'
import Aux from '../../hoc/Auxiliry'
import classes from './Layout.module.css'
import Toolbar from '../'
const layout = (props) => (
    <Aux>
        <div>Toolbar , Sidedrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
)



export default layout
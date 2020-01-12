import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls =[
    {label: 'Salad', type:'salad'},
    {label: 'Meat', type:'meat'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
]

const BuildControls = props => (
    
        <div className={classes.BuildControls}>
           {controls.map(ele => (
               <BuildControl key={ele.label} label={ele.label} />
           ))}
        </div>
    
)

export default BuildControls
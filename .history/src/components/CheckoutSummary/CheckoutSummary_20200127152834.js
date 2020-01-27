import React, { Component, Fragment } from 'react'
import Burger from '../Burger/Burger'
const checkoutSummary = (props) => {
    return (
        <Fragment>
        <h3>Hope we taste well</h3>
        <div style={{ width: '100px', margin: 'auto' }}>
            <Burger ingredients={props.ingredients} />
        </div>
        </Fragment>
    )
}

export default checkoutSummary
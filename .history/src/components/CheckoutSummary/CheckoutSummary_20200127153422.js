import React, {Fragment } from 'react'
import Burger from '../Burger/Burger'
import Button from  '../UI/Button/Button'
const checkoutSummary = (props) => {
    return (
        <Fragment>
            <h3>Hope we taste well</h3>
            <div style={{ width: '100px', margin: 'auto' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Success">Cancel</Button>
            <Button btnType="Danget">Success</Button>
        </Fragment>
    )
}

export default checkoutSummary
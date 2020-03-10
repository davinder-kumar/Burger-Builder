import React, { Component } from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import routes from '../../routes'
const Checkout = props => {
    const cancelHandler = () => {
        props.history.goBack()
    }
    successHandler = () => {
        props.history.replace(props.match.path + "/contact-us")
    }
        let summary = <Redirect to="/" />
        const afterPurchase = props.purchased ? <Redirect to="/" /> : null
        if (props.ingredients) {
            summary =
                <div>
                    {afterPurchase}
                    <CheckoutSummary clickCancel={cancelHandler}
                        clickSuccess={successHandler} ingredients={props.ingredients} />
                    <Route path={props.match.path + routes.contactUs} exact component={ContactData} />
                </div>
        }
        return summary
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
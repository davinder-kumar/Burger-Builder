import React, { Component } from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import routes from '../../routes'
class Checkout extends Component {
    cancelHandler = () => {
        this.props.history.goBack()
    }
    successHandler = () => {
        this.props.history.replace(this.props.match.path + "/contact-us")
    }
    render() {
        console.log(this.props)
        let summary = <Redirect to="/" />
        const afterPurchase = this.props.purchased ? <Redirect to="/" /> : null
        if (this.props.ingredients) {
            summary =
                <div>
                    {afterPurchase}
                    <CheckoutSummary clickCancel={this.cancelHandler}
                        clickSuccess={this.successHandler} ingredients={this.props.ingredients} />
                    <Route path={this.props.match.path + routes.contactUs} exact component={ContactData} />
                </div>
        }
        return summary
    }
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
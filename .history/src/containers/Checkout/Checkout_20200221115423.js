import React, { Component } from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionTypes from '../../redux-store/actions'
class Checkout extends Component {


    componentWillMount(){
        this.props.purchaseInit()
    }
    cancelHandler = () => {
        this.props.history.goBack()
    }
    successHandler = () => {
        this.props.history.replace(this.props.match.path + "/contact-us")
    }
    render() {
        console.log(this.props,"madr")
        let summary = <Redirect to="/" />
        // if(this.props.purchased){
            // const afterPurchase = this.props.purchased ? <Redirect to="/" /> : null
            const afterPurchase = this.props.purchased ? null : null
        // }
        if (this.props.ingredients) {
            summary = 
            <div>
                {afterPurchase}
                <CheckoutSummary clickCancel={this.cancelHandler}
                    clickSuccess={this.successHandler} ingredients={this.props.ingredients} />
                <Route path={this.props.match.path + "/contact-us"} exact component={ContactData} />
            </div>
        }
        // console.log(this.state.ingredients)
        return summary
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        purchased : state.order.purchased
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        purchaseInit : () => dispatch(actionTypes.purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
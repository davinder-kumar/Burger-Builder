import React, { Component } from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
class Checkout extends Component {

   
    
    cancelHandler = () => {
        this.props.history.goBack()
    }
    successHandler = () => {
        this.props.history.replace(this.props.match.path + "/contact-us")
    }
    render() {
        // console.log(this.state.ingredients)
        return (
            <div>
                <CheckoutSummary clickCancel={this.cancelHandler} 
                clickSuccess={this.successHandler} ingredients={this.props.ingredients} />
                <Route path={this.props.match.path + "/contact-us"} exact component={ContactData}/>
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return{
        ingredients : state..ingredients
    }
}

export default connect(mapStateToProps)(Checkout)
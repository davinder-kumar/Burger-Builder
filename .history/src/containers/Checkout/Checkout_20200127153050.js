import React, { Component } from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
class Checkout extends Component{
    state = {
        ingredients : {
            
        }
    }
    render(){
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} />
            </div>
        )
    }
}

export default Checkout
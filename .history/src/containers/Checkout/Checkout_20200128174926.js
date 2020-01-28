import React, { Component } from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
class Checkout extends Component{
    state = {
        
    }

    componentWillMount(){
        let params = decodeURIComponent(this.props.location.search)

        params = Object.fromEntries(new URLSearchParams(params))
        this.setState({
            ingredients : params
        })

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
import React, { Component } from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
class Checkout extends Component{
    state = {
        ingredients : {
            bacon:1,
            meat:1,
            cheese :2
        }
    }

    componentWillMount(){
        let params = decodeURIComponent(this.props.location.search)
        params = new URLSearchParams(params);

        Object.fromEntries(new URLSearchParams(params))

        params = params.get('bacon')
        console.log(params)
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
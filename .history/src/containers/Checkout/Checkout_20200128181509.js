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
        let query = new URLSearchParams(this.props.location.search)
        console.log()
        query.forEach(function(value, key) {
            console.log(value, key);
          });
        // const FinalParam = {}
        // for(let i in params){
        //     if(params[i] > 0){
        //         FinalParam[i] = parseInt(params[i])
        //     }
        // }
        // this.setState({
        //     ingredients : FinalParam
        // })

    }
    render(){
        // console.log(this.state.ingredients)
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} />
            </div>
        )
    }
}

export default Checkout
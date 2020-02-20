import * as actionTypes from '../actions/actionTypes'
const initState = {
    loading : false,
    orders : []
}

const orderReducer = (state = initState, action) => {
    switch(action) {
        case actionTypes.BURGER_ORDER_SUCCESS : 
        // const newOrder = {
        //     ...state.orders,
        // }
        return {
            ...state,
            loading : false,
            // orders 

        }
    }
}

export default orderReducer
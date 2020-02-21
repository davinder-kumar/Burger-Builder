import * as actionTypes from '../actions/actionTypes'
import {} from '../'
const initState = {
    loading: false,
    orders: [],
    purchased: false
}

const orderReducer = (state = initState, action) => {
    switch (action.type) {

        case actionTypes.BURGER_ORDER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.id

            }
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder),
                purchased: true
            }
        case actionTypes.BURGER_ORDER_FAIL:
            return {
                ...state,
                loading: false,

            }

        case actionTypes.SET_ORDER_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchased: false
            }
        case actionTypes.LOAD_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.orders
            }
        case actionTypes.LOAD_ORDERS_FAIL:
            return {
                ...state,
                loading: false,
            }

        case actionTypes.SET_ORDERS_LOAD_LOADING:
            return {
                ...state,
                loading: true,
            }
        default:
            return state;
    }
}

export default orderReducer
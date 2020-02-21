import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'
const initState = {
    loading: false,
    orders: [],
    purchased: false
}

export const burgerOrderSuccess = (state,action) => {
    const newOrder = {
        ...action.orderData,
        id: action.id

    }

    return updateObject(state, {
        loading: false,
        orders: state.orders.concat(newOrder),
        purchased: true
    })
}
export const burgerOrderFail = () => {

}
export const SetOrderLoading = () => {

}
export const purchaseInit = () => {

}
export const loadOrdersSuccess = () => {
}
export const loadOrdersFail = () => {

}
export const setOrdersLoadLoading = () => {

}

const orderReducer = (state = initState, action) => {
    switch (action.type) {

        case actionTypes.BURGER_ORDER_SUCCESS: return burgerOrderSuccess(state, action)


        case actionTypes.BURGER_ORDER_FAIL:
            return updateObject(state, {
                loading: false,

            })

        case actionTypes.SET_ORDER_LOADING:
            return updateObject(state, {
                loading: true,

            })
        case actionTypes.PURCHASE_INIT:
            return updateObject(state, {
                loading: false,

            })
        case actionTypes.LOAD_ORDERS_SUCCESS:
            return updateObject(state, {
                loading: false,
                orders: action.orders
            })
        case actionTypes.LOAD_ORDERS_FAIL:
            return updateObject(state, {
                loading: false,

            })

        case actionTypes.SET_ORDERS_LOAD_LOADING:
            return updateObject(state, {
                loading: true,

            })
        default:
            return state;
    }
}

export default orderReducer
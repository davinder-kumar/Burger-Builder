import * as actionTypes from '../actions/actionTypes'
import { updateObject } from '../utility'
const initState = {
    loading: false,
    orders: [],
    purchased: false
}

export const burgerOrderSuccess = (state, action) => {
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
export const burgerOrderFail = (state, action) => {
    return updateObject(state, {
        loading: false,

    })
}
export const SetOrderLoading = (state, action) => {
    return updateObject(state, {
        loading: true,

    })
}
export const purchaseInit = (state, action) => {
    return updateObject(state, {
        purchased: false,

    })
}
export const loadOrdersSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        orders: action.orders
    })
}
export const loadOrdersFail = (state, action) => {
    return updateObject(state, {
        loading: false,

    })
}
export const setOrdersLoadLoading = (state, action) => {
    return updateObject(state, {
        loading: true,

    })
}

const deleteOrderSuccess = (state,action) => {
    return {
        ...state,
        loading : false
    }
}
const deleteOrderFail = (state,action) => {
    return updateObject(state,{
        loading:false
    })
    return {
        ...state,
        loading : false
    }
}

const orderReducer = (state = initState, action) => {
    switch (action.type) {

        case actionTypes.BURGER_ORDER_SUCCESS: return burgerOrderSuccess(state, action)
        case actionTypes.BURGER_ORDER_FAIL: return burgerOrderFail(state, action)
        case actionTypes.SET_ORDER_LOADING: return SetOrderLoading(state, action)
        case actionTypes.PURCHASE_INIT: return purchaseInit(state, action)
        case actionTypes.LOAD_ORDERS_SUCCESS: return loadOrdersSuccess(state, action)
        case actionTypes.LOAD_ORDERS_FAIL: return loadOrdersFail(state, action)
        case actionTypes.SET_ORDERS_LOAD_LOADING: return setOrdersLoadLoading(state, action)
        case actionTypes.DELETE_ORDER_SUCCESS : return deleteOrderSuccess(state,action)
        case actionTypes.DELETE_ORDER_FAIL : return deleteOrderFail(state,action)
        default:
            return state;
    }
}

export default orderReducer
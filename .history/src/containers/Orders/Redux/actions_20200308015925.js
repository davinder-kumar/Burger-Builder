import * as actionTypes from '../../../redux-store/actionTypes'
import axois from '../../../axios-orders'
// import axios from 'axios'

export const SetOrderLoading = () => {
    return {
        type: actionTypes.SET_ORDER_LOADING
    }
}

export const burderOrderInit = (orderData, token) => {
    return {
        type: actionTypes.BURGER_ORDER_INIT_SAGA,
        orderData: orderData,
        token: token
    }

}
export const burderOrderSuccess = (id, orderData) => {
    return {
        type: actionTypes.BURGER_ORDER_SUCCESS,
        id: id,
        orderData: orderData
    }
}
export const burderOrderFail = error => {
    return {
        type: actionTypes.BURGER_ORDER_FAIL,
        response: error
    }
}
export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

export const loadOrders = (token, userId) => {
    return {
        type: actionTypes.LOAD_ORDERS_SAGA,
        token: token,
        userId: userId
    }
}


export const loadOrderSuccess = (orders) => {
    return {
        type: actionTypes.LOAD_ORDERS_SUCCESS,
        orders: orders
    }
}
export const loadOrdersFail = () => {
    return {
        type: actionTypes.LOAD_ORDERS_FAIL
    }
}

export const setOrdersLoadLoading = () => {
    return {
        type: actionTypes.SET_ORDERS_LOAD_LOADING
    }
}


export const deleteOrder = (orderID,token,userId) => {
    return {
        type: actionTypes.DELETE_ORDER_SAGA,
        orderID: orderID,
        token : token,
        userId: userId
        
    }
}
export const deleteOrderSuccess = (res) => {
    return {
        type: actionTypes.DELETE_ORDER_SUCCESS,
        res: res
    }
}
export const deleteOrderFail = (error) => {
    return {
        type: actionTypes.DELETE_ORDER_FAIL,
        error: error
    }
}
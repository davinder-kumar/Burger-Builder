import * as actionTypes from '../../../redux-store/actionTypes'
import axois from '../../../axios-orders'
// import axios from 'axios'

export const SetOrderLoading = () => {
    return {
        type: actionTypes.SET_ORDER_LOADING
    }
}

export const burderOrderInit = (orderData,token) => {
    return dispatch => {
        dispatch(SetOrderLoading())
        axois.post('/orders.json?auth='+token, orderData)
            .then(response => {
                // console.log(response);
                dispatch(burderOrderSuccess(response.data.name, orderData));
            })
            .catch(error => {
                // console.log(error);
                dispatch(burderOrderFail(error));
            })
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

export const loadOrders = (token,userId) => {
    // console.log(userId,"s")
    return (dispatch) => {
        dispatch(setOrdersLoadLoading());
        // const urlParam = '?auth='+token+'&orderBy="userId"&equalTo="'+userId+'"'
        const urlParam = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`
        axois.get("orders.json"+urlParam)
            .then((res) => {
                const orders = []
                for (let i in res.data) {
                    // console.log(res.data[i])
                    orders.push({
                        ingredients: res.data[i].ingredients,
                        id: i,
                        price: res.data[i].price,
                        name: res.data[i].orderData.name
                    })
                }
                dispatch(loadOrderSuccess(orders));
            })
            .catch(() => {
                dispatch(loadOrdersFail());
            })
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


export const deleteOrder = (orderID) => {
    return dispatch => {
        dispatch(setOrdersLoadLoading())
        axois.delete(`/orders/${orderID}.json`)
            .then(function (res) {
                dispatch(deleteOrderSuccess(res));
                dispatch(loadOrders())

            })
            .catch(function (error) {
                dispatch(deleteOrderFail(error))
            })

    }
}
const deleteOrderSuccess = (res) => {
    return {
        type: actionTypes.DELETE_ORDER_SUCCESS,
        res: res
    }
}
const deleteOrderFail = (error) => {
    return {
        type: actionTypes.DELETE_ORDER_FAIL,
        error: error
    }
}
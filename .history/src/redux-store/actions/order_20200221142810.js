import * as actionTypes from './actionTypes'
import axois from '../../axios-orders'

export const SetOrderLoading = () => {
    return {
        type: actionTypes.SET_ORDER_LOADING
    }
}

export const burderOrderInit = (orderData) => {
    return dispatch => {
        dispatch(SetOrderLoading())
        axois.post('/orders.json', orderData)
            .then(response => {
                console.log(response);
                dispatch(burderOrderSuccess(response.data.name, orderData));
            })
            .catch(error => {
                console.log(error);
                dispatch(burderOrderFail(error));
            })
    }

}
export const burderOrderSuccess = (id,orderData) => {
    return {
        type: actionTypes.BURGER_ORDER_SUCCESS,
        id: id,
        orderData : orderData
    }
}
export const burderOrderFail = error => {
    return {
        type: actionTypes.BURGER_ORDER_FAIL,
        response: error
    }
}
export const purchaseInit = () =>{
    return {
        type : actionTypes.PURCHASE_INIT
    }
}

export const 
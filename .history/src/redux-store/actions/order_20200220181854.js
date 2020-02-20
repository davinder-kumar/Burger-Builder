import * as actionTypes from './actionTypes'
import axois from '../../axios-orders'

export const burgerOrderStart

export const burderOrderInit = (orderData) => {
    console.log("yha hu");
    return dispatch => {
        axois.post('/orders.json', orderData)
            .then(response => {
                console.log(response);
                dispatch(burderOrderSuccess(response));
            })
            .catch(error => {
                console.log(error);
                dispatch(burderOrderFail(error));
            })
    }

}

export const burderOrderSuccess = response => {
    return {
        type: actionTypes.BURGER_ORDER_SUCCESS,
        response : response
    }
}
export const burderOrderFail = error => {
    return {
        type: actionTypes.BURGER_ORDER_FAIL,
        response : error
    }
}
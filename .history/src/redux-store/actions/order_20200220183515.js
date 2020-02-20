import * as actionTypes from './actionTypes'
import axois from '../../axios-orders'

export const SetOrderLoading = () =>{
    alert("dsads")
    return {
        type : actionTypes.SET_ORDER_LOADING
    }
}

export const burderOrderInit = (orderData) => {
    return dispatch => {
        alert("dsa")
        dispatch(SetOrderLoading())
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
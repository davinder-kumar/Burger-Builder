import * as actionTypes from './actionTypes'

export const burderOrderInit = (orderData) => {
    console,log("yha hu");
    return dispatch => {
        axois.post('/orders.json', orderData)
            .then(response => {
                console,log("yha hu");
                dispatch(burderOrderSuccess(response));
            })
            .catch(error => {
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
        response : response
    }
}
import * as actionTypes from './actionTypes'

export const burderOrderInit = (orderData) => {
    return dispatch => {
        axois.post('/orders.json', orderData)
            .then(response => {
                dispatch(burderOrderSuccess(response));
            })
            .catch(error => {
                dispatch(burderOrderFail(error));
            })
    }

}

export const burderOrderSuccess = response => {
    return {
        type: actionTypes.burderOrderSuccess,
        response : response
    }
}
export const burderOrderSuccess = response => {
    return {
        type: actionTypes.burderOrderSuccess,
        response : response
    }
}
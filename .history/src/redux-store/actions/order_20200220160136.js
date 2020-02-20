import * as actionTypes from './actionTypes'

export const burderOrderInit = (orderData) => {
    return dispatch => {
        axois.post('/orders.json', order)
            .then(response => {
                dispatch(burderOrderSuccess(response));
            })
            .catch(error => {
                dispatch(burderOrderFAIL(response));
            })
    }

}

export const burderOrderSuccess
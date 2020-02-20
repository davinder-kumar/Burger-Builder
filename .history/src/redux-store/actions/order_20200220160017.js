import * as actionTypes from './actionTypes'

export const burderOrderInit = () => {
    return dispatch => {
        axois.post('/orders.json', order)
            .then(response => {
                dispatch(burderOrderSuccess(response));
            })
            .catch(error => {
                dispatch(burderOrderSuccess(response));
            })
    }

}
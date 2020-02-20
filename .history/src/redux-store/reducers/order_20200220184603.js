import * as actionTypes from '../actions/actionTypes'
const initState = {
    loading: false,
    orders: []
}

const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.BURGER_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,

            }
        case actionTypes.BURGER_ORDER_FAIL:
            return {
                ...state,
                loading: false,

            }

        case actionTypes.SET_ORDER_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

export default orderReducer
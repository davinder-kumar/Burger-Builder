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

export const loadOrders = () => {
    return (dispatch) => {
        axios.get("orders.json")
            .then((res) => {
                const orders = []
                for (let i in res.data) {
                    console.log(res.data[i])
                    orders.push({
                        ingredients: res.data[i].ingredients,
                        id: i,
                        price: res.data[i].price,
                        name: res.data[i].orderData.name
                    })
                }

                // this.setState({
                //     loading: false,
                //     orders: orders
                // })
            })
            .catch(() => {
                // this.setState({
                //     loading: false
                // })
            })
    }
}

export const loadOrderSuccess = (orders) => {
    return {
        
    }
}
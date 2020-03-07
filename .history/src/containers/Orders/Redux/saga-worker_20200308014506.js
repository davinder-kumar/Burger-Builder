import axois from '../../../axios-orders'
import { put } from 'redux-saga/effects'
import * as actionsList from '../../../redux-store/actions'

export function* burgerOrderInitSaga(action) {
    yield put(actionsList.SetOrderLoading())
    try {
        const repsonse = yield axois.post('/orders.json?auth=' + action.token, action.orderData);
        yield put(actionsList.burderOrderSuccess(repsonse.data.name, action.orderData));

    } catch (error) {
        yield put(actionsList.burderOrderFail(error));

    }
}

export function* loadOrdersSaga(action) {
    yield put(actionsList.setOrdersLoadLoading());
    const urlParam = `?auth=${action.token}&orderBy="userId"&equalTo="${action.userId}"`
    try {
        const res = yield axois.get("orders.json" + urlParam);
        const orders = []
        for (let i in res.data) {
            orders.push({
                ingredients: res.data[i].ingredients,
                id: i,
                price: res.data[i].price,
                name: res.data[i].orderData.name
            })
        }
        yield put(actionsList.loadOrderSuccess(orders));
    } catch (err) {
        yield put(actionsList.loadOrdersFail());
    }
}


export function* deleteOrdersSaga(action) {
    yield put(actionsList.setOrdersLoadLoading())
    try {
        const res = yield axois.delete(`/orders/${action.orderID}.json?auth=${action.token}`);
        yield put(actionsList.deleteOrderSuccess(res));
        yield put(actionsList.loadOrders())
    } catch (error) {
        yield put(actionsList.deleteOrderFail(error))
    }
}

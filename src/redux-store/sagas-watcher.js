import { takeEvery } from 'redux-saga/effects'
import * as actionsList from './actionTypes'
import {
    authLogoutSagaWorker,
    checkExpireTimeSagaWorker,
    authWorker,
    autoLoginUserSagaWorker
} from '../containers/Auth/Redux/saga-worker'
import { initIngredientsSaga } from '../containers/BurgerBuilder/Redux/saga-worker'
import { burgerOrderInitSaga, loadOrdersSaga, deleteOrdersSaga } from "../containers/Orders/Redux/saga-worker";

export function* watchAuth() {
    yield takeEvery(actionsList.AUTO_LOGOUT_START, authLogoutSagaWorker)
    yield takeEvery(actionsList.INIT_CHECK_EXPIRE_TIME, checkExpireTimeSagaWorker)
    yield takeEvery(actionsList.AUTH_START, authWorker)
    yield takeEvery(actionsList.AUTO_LOGIN_USER_START, autoLoginUserSagaWorker)

}

export function* watchBurgerBuilder() {
    yield takeEvery(actionsList.INIT_INGS_START_SAGA, initIngredientsSaga)
}

export function* watchOrder() {
    yield takeEvery(actionsList.BURGER_ORDER_INIT_SAGA, burgerOrderInitSaga)
    yield takeEvery(actionsList.LOAD_ORDERS_SAGA, loadOrdersSaga)
    yield takeEvery(actionsList.DELETE_ORDER_SAGA, deleteOrdersSaga)
}

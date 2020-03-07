import { put, delay } from 'redux-saga/effects'
import * as  actions from '../../../redux-store/actions'
export function* authLogoutSaga(action) {
    yield localStorage.removeItem("token")
    yield localStorage.removeItem("userId")
    yield localStorage.removeItem("tokenExpiryTime")
    yield put(actions.logoutUserSucceed())
}

export function* checkExpireTimeSaga(action) {
    delay(action.ex)
    yield setTimeout(() => {
        put(actions.logoutUser())
    }, 1)
}
import { put } from 'redux-saga/effects'
import * as  actions from '../../../redux-store/actions'
export function* authLogout(action) {
    yield localStorage.removeItem("token")
    yield localStorage.removeItem("userId")
    yield localStorage.removeItem("tokenExpiryTime")
    yield put(actions.logoutUserSucceed())
}

export function* checkExpireTime(action) {
    yield console.log(action)
    yield setTimeout(() => {
        alert()
        put(actions.logoutUser())
    }, 1)
}
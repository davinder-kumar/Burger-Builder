import { put } from 'redux-saga/effects'
// import * as actionTypes from '../../../redux-store/actionTypes'
import actions from '../../../redux-store/actions'
export function* authLogout() {
    yield localStorage.removeItem("token")
    yield localStorage.removeItem("userId")
    yield localStorage.removeItem("tokenExpiryTime")
    yield put({
        type: actionTypes.AUTH_LOGOUT
    })
}

export function* checkExpireTime() {
    yield setTimeout(() => {
        dispatch(logoutUser());
    }, expireTime * 1000)
}
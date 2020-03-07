import { put, takeLatest } from 'redux-saga/effects'
// import * as actionTypes from '../../../redux-store/actionTypes'
import * as  actions from '../../../redux-store/actions'
export function* authLogout(action) {
    yield localStorage.removeItem("token")
    yield localStorage.removeItem("userId")
    yield localStorage.removeItem("tokenExpiryTime")
    yield put(actions.logoutUserSucceed())
}

export function* checkExpireTime(action) {
    console.log(action)
    alert()
    yield setTimeout(() => {
        // yield put(logoutUser());
    }, action.expireTime * 1000)
}

export default rootSaga
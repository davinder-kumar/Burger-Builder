import { put } from 'redux-saga/effects'
// import * as actionTypes from '../../../redux-store/actionTypes'
import * as  actions from '../../../redux-store/actions'
export function* authLogout(action) {
    console.log(action)
    yield localStorage.removeItem("token")
    yield localStorage.removeItem("userId")
    yield localStorage.removeItem("tokenExpiryTime")
    yield put(actions.logoutUserSucceed())
}

// export function* checkExpireTime() {
//     yield setTimeout(() => {
//         dispatch(logoutUser());
//     }, expireTime * 1000)
// }
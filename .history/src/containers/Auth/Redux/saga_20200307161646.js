import { put } from 'redux-saga/effects'
import { de} from 'redux-saga'
import * as  actions from '../../../redux-store/actions'
export function* authLogoutSaga(action) {
    yield localStorage.removeItem("token")
    yield localStorage.removeItem("userId")
    yield localStorage.removeItem("tokenExpiryTime")
    yield put(actions.logoutUserSucceed())
}

export function* checkExpireTimeSaga(action) {
    yield console.log(action)
    yield setTimeout(() => {
        put(actions.logoutUser())
    }, 1)
}
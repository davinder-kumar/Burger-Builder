import { takeEvery, fork } from 'redux-saga/effects'
import * as actionsList from '../redux-store/actionTypes'
import {authLogoutSaga, checkExpireTimeSaga} from '../containers/Auth/Redux/saga'
export function* watchAuthLogout(){
    yield takeEvery(actionsList.AUTO_LOGOUT_START, authLogoutSaga)
}

function* watchAuthExpiryTime(){
    yield takeEvery(actionsList.INIT_CHECK_EXPIRE_TIME , checkExpireTimeSaga)
}

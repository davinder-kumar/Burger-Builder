import { takeEvery, fork } from 'redux-saga/effects'
import * as actionsList from '../redux-store/actionTypes'
import {authLogout, checkExpireTime} from '../containers/Auth/Redux/saga'
function* authLogoutStart(){
    yield takeEvery(actionsList.AUTO_LOGOUT_START, authLogout)
}

function* initCheckExpiryTime(){
    yield takeEvery(actionsList.INIT_CHECK_EXPIRE_TIME , checkExpireTime)
}

export default function rootSaga(){
    fork(initCheckExpiryTime)
    fork(authLogoutStart)
}
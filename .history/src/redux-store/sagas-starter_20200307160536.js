import { takeEvery, fork } from 'redux-saga/effects'
import * as actionsList from '../redux-store/actionTypes'
import {authLogoutS, checkExpireTime} from '../containers/Auth/Redux/saga'
function* authLogoutStart(){
    yield takeEvery(actionsList.AUTO_LOGOUT_START, authLogout)
}

function* initCheckExpiryTime(){
    yield takeEvery(actionsList.INIT_CHECK_EXPIRE_TIME , checkExpireTime)
}

export default function* rootSaga(){
    yield fork(initCheckExpiryTime)
    yield fork(authLogoutStart)
}
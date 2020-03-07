import { takeEvery, fork } from 'redux-saga/effects'
import * as actionsList from '../redux-store/actionTypes'
import {authLogoutSaga, checkExpireTimeSaga} from '../containers/Auth/Redux/saga'
function* authLogoutStart(){
    yield takeEvery(actionsList.AUTO_LOGOUT_START, authLogoutSaga)
}

function* initCheckExpiryTime(){
    yield takeEvery(actionsList.INIT_CHECK_EXPIRE_TIME , checkExpireTimeSaga)
}

export default function* rootSaga(){
    yield fork(initCheckExpiryTime)
    yield fork(authLogoutStart)
}
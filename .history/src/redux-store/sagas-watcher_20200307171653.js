import { takeEvery } from 'redux-saga/effects'
import * as actionsList from './actionTypes'
import {authLogoutSagaWorker, checkExpireTimeSagaWorker, authWorker} from '../containers/Auth/Redux/saga-worker'
export default function* watchAuth(){
    yield takeEvery(actionsList.AUTO_LOGOUT_START, authLogoutSagaWorker)
    yield takeEvery(actionsList.INIT_CHECK_EXPIRE_TIME , checkExpireTimeSagaWorker)

}

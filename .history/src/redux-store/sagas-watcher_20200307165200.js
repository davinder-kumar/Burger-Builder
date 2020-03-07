import { takeEvery } from 'redux-saga/effects'
import * as actionsList from '../redux-store/actionTypes'
import {authLogoutSaga, checkExpireTimeSaga} from '../containers/Auth/Redux/saga'
export default function* watchAuth(){
    yield takeEvery(actionsList.AUTO_LOGOUT_START, authLogoutSaga)
    yield takeEvery(actionsList.INIT_CHECK_EXPIRE_TIME , checkExpireTimeSaga)

}

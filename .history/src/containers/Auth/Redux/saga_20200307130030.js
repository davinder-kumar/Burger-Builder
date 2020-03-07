import { put } from 'redux-saga/effects'

function* authLogout{
    yield localStorage.removeItem("token")
    yield localStorage.removeItem("userId")
    yield localStorage.removeItem("tokenExpiryTime")
    yield put({
        type: actionsList.AUTH_LOGOUT
    })
}
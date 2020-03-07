import { put, delay } from 'redux-saga/effects'
import axios from '../../../axios-auth'
import * as  actions from '../../../redux-store/actions'
export function* authLogoutSagaWorker(action) {
    yield localStorage.removeItem("token")
    yield localStorage.removeItem("userId")
    yield localStorage.removeItem("tokenExpiryTime")
    yield put(actions.logoutUserSucceed())
}

export function* checkExpireTimeSagaWorker(action) {
    yield delay(action.expiryTime *1000 )
    yield put(actions.logoutUser())
}

export function* authWorker(action) {
    yield put(actions.authStartLoading())
    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true,
    }

    let url = 'accounts:signUp?key=AIzaSyDn2xzmxqF6XuzvFCy4CU0iwqXDMLsnbcg'
    if (!action.isSignUp) {
        url = 'accounts:signInWithPassword?key=AIzaSyDn2xzmxqF6XuzvFCy4CU0iwqXDMLsnbcg'
    }
    try {
        const res = yield axios.post(url, authData);
        // alert(res.data.expiresIn)
        yield put(actions.checkExpireTime(res.data.expiresIn));
        yield put(actions.authSuccess(res.data.idToken, res.data.localId));
        yield localStorage.setItem("token", res.data.idToken)
        yield localStorage.setItem("userId", res.data.localId)
        const tokenTime = yield new Date(new Date().getTime() + res.data.expiresIn * 1000)
        // console.log(tokenTime)
        yield localStorage.setItem("tokenExpiryTime", tokenTime)
    } catch (error) {
        yield put(actions.authFail(error.response.data.error.message));
    }
}

export function* autoLoginUserSagaWorker() {
    const token = yield localStorage.getItem("token");
    if (!token) {
         yield put(actions.logoutUser())
    } else {
        const expiryTime = yield localStorage.getItem("tokenExpiryTime");
        if (new Date(expiryTime) <= new Date()) {
            yield put(actions.logoutUser())
        } else {
            const userId = yield localStorage.getItem("userId");
            yield put(actions.authSuccess(token, userId))
            const timeLeft = (new Date(expiryTime).getTime() - new Date().getTime()) / 1000;
            yield put(actions.checkExpireTime(timeLeft))
        }
    }

}
import {} from 'redux-saga/effects/'

function* authLogout{
    yield localStorage.removeItem("token")
    yield localStorage.removeItem("userId")
    yield localStorage.removeItem("tokenExpiryTime")
    return {
        type: actionsList.AUTH_LOGOUT
    }
}
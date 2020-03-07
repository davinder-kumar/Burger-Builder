function* authLogout{
    yield localStorage.removeItem("token")
    yield localStorage.removeItem("userId")
    localStorage.removeItem("tokenExpiryTime")
    return {
        type: actionsList.AUTH_LOGOUT
    }
}
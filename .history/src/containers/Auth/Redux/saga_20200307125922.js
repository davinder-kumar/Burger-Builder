function* authLogout{
    yeild localStorage.removeItem("token")
    localStorage.removeItem("userId")
    localStorage.removeItem("tokenExpiryTime")
    return {
        type: actionsList.AUTH_LOGOUT
    }
}
import * as actionsList from '../../../redux-store/actionTypes'
export const authStartLoading = () => {
    return {
        type: actionsList.AUTH_START_LOADING,
    }
}
export const authSuccess = (token, localId) => {
    return {
        type: actionsList.AUTH_SUCCESS,
        token: token,
        userId: localId
    }
}
export const authFail = (error) => {
    return {
        type: actionsList.AUTH_FAIL,
        error: error
    }
}

export const checkExpireTime = (expireTime) => {
    return {
        type : actionsList.INIT_CHECK_EXPIRE_TIME,
        expiryTime : expireTime
    }
}

export const logoutUser = () => {
    return {
        type: actionsList.AUTO_LOGOUT_START

    }
}

export const logoutUserSucceed = () =>{
    return {
        type: actionsList.AUTH_LOGOUT
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionsList.SET_REDIRECT_PATH,
        path: path
    }
}

export const auth = (email, password, isSignUp) => {
    return {
        type: actionsList.AUTH_START,
        email: email,
        password: password,
        isSignUp: isSignUp

    }
}

export const autoLoginUser = () => {
    return {
        type: actionsList.AUTO_LOGIN_USER_START
    }

    
}
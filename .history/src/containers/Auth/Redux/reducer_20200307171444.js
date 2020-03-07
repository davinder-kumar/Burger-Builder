import * as actionTypes from '../../../redux-store/actionTypes'
import { updateObject } from '../../../Utilities/Utility'

const initState = {
    userId: null,
    token: null,
    error: null,
    loading: null,
    AuthRedirectPath: null
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START_LOADING: return authStartLoading(state, action)
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action)
        case actionTypes.AUTH_FAIL: return authFail(state, action)
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action)
        case actionTypes.SET_REDIRECT_PATH: return setAuthRedirectPath(state, action)
        default:
            return state
    }
}

const authStartLoading = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null
    })
}
const authSuccess = (state, action) => {
    return updateObject(state, {
        loading: null,
        token: action.token,
        userId: action.userId,
        error: null
    })
}
const authFail = (state, action) => {
    return updateObject(state, {
        loading: false,
        error: action.error
    })
}
const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        userId: null
    })
}

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, {
        AuthRedirectPath: action.path
    })
}




export default reducer


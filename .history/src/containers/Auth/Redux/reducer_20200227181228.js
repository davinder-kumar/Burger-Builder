import * as actionTypes from '../../../redux-store/actionTypes'
import { updateObject } from '../../../redux-store/utility'

const initState = {
    userId: null,
    token: null,
    error: null,
    loading: null
}

const authStart = (state, action) => {
    return updateObject(state, {
        loading: true,
        error: null
    })
}
const authSuccess = (state, action) => {
    return updateObject(state, {
        loading: null,
        token : action.token,
        userId : action.userId,
        error : null
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
        loading: false,
        error: action.error
    })
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action)
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action)
        case actionTypes.AUTH_FAIL: return authFail(state, action)
        case actionTypes.AUTH_LOGOUT : return authLogout(state,action)
        default:
            return state
    }
}

export default reducer


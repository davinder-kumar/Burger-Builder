import * as actionTypes from './actionTypes'

export const addIngrediant = (ingType) => {
    return {
        type: actionTypes.ADD_INGREDIANT,
        ingType : ingType
    }
}
export const removeIngredient = (ingType) => {
    return {
        type: actionTypes.REMOVE_INGREDIANT,
        ingType : ingType
    }
}

export const initIngredients = () =>{
    return dispatch => {
        dispatch()
    }
}
export const init
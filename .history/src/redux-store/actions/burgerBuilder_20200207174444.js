import * as actionTypes from './actionTypes'

export const addIngrediant = (ingType) => {
    return {
        type: actionTypes.ADD_INGREDIANT,
        ingType : ingType
    }
}

export const addIngrediant
export const removeIngredient = (ingType) => {
    return {
        type: actionTypes.REMOVE_INGREDIANT,
        ingType : ingType
    }
}
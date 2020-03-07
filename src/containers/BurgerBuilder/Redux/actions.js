import * as actionTypes from '../../../redux-store/actionTypes'

export const addIngrediant = (ingType) => {
    return {
        type: actionTypes.ADD_INGREDIANT,
        ingType: ingType
    }
}
export const removeIngredient = (ingType) => {
    return {
        type: actionTypes.REMOVE_INGREDIANT,
        ingType: ingType
    }
}

export const initIngredients = () => {
    return {
        type : actionTypes.INIT_INGS_START_SAGA
    }
}
export const initIngredientsRef = (ings) => {
    return {
        type: actionTypes.INIT_INGREDIENTS,
        ings: ings
    }
}
export const initIngredientsFailed = () => {
    return {
        type: actionTypes.INIT_INGREDIENTS_FAILED
    }
}
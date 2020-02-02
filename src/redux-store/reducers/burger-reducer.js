import * as actionsList from '../actions'
const initState = {
    ingredients: {
        bacon: 0,
        salad: 0,
        meat: 0,
        cheese: 0,
        paneer: 0
    }
}
const burgerReducer = (state = initState, action) => {
    switch (action.type) {
        case (actionsList.ADD_INGREDIANT):
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingType]: state.ingredients[action.ingType] + 1
                }
            }
        case (actionsList.REMOVE_INGREDIANT):
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingType]: state.ingredients[action.ingType] - 1
                }
            }

    }
    return state
}

export default burgerReducer
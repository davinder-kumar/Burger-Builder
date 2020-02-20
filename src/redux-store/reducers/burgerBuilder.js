import * as actionsList from '../actions/actionTypes'
const INGREDEINTS_PRICE = { meat: 1.3, bacon: 0.7, cheese: 0.5, salad: 0.3, paneer: 1.0 }
const initState = {
    ingredients: null,
    price: 4.0,
    isError: false

}
const burgerReducer = (state = initState, action) => {
    switch (action.type) {
        case (actionsList.ADD_INGREDIANT):
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingType]: state.ingredients[action.ingType] + 1
                },
                price: state.price + INGREDEINTS_PRICE[action.ingType]
            }
        case (actionsList.REMOVE_INGREDIANT):
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingType]: state.ingredients[action.ingType] - 1
                },
                price: state.price - INGREDEINTS_PRICE[action.ingType]
            }

        case (actionsList.INIT_INGREDIENTS):
            return {
                ...state,
                ingredients: {
                    salad: action.ings.salad,
                    meat: action.ings.meat,
                    bacon: action.ings.bacon,
                    cheese: action.ings.cheese,
                    paneer: action.ings.paneer,
                }
            }
        case (actionsList.INIT_INGREDIENTS_FAILED):
            return {
                ...state,
                isError: true
            }

        default:
            return state
    }

}

export default burgerReducer
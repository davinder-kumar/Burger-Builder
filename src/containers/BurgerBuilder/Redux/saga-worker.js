import { put } from 'redux-saga/effects'
import axois from '../../../axios-orders'
import * as actionsList from '../../../redux-store/actions'
export function* initIngredientsSaga() {
    try {
        const response = yield axois.get("/ingrediants.json"); 
        yield put(actionsList.initIngredientsRef(response.data))
    } catch (error) {
        yield put(actionsList.initIngredientsFailed())
    }
}
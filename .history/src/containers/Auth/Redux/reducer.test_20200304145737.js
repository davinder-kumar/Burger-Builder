import reducer from './actions'
import { AUTH_SUCCESS } from '../../../redux-store/actionTypes'
describe("Auth/Redux/Reducer", () =>{
    it("should store userID and Token in redux state", () =>{
        expect(reducer({
            userId: null,
            token: null,
            error: null,
            loading: null,
            AuthRedirectPath: null
        }, {type : AUTH_SUCCESS})).toEqual()
    })
})
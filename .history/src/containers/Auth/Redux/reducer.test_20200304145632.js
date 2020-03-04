import reducer from './actions'
describe("Auth/Redux/Reducer", () =>{
    it("should store userID and Token in redux state", () =>{
        expect(reducer({
            userId: null,
            token: null,
            error: null,
            loading: null,
            AuthRedirectPath: null
        }))
    })
})
import { configure, configure, shallow } from "enzyme"
import Adapter  from 'enzyme-adapter-react-16'

configure({
    adapter : new Adapter()
})

// import 
describe("<Navigation Items >", () => {
    it("should render two navigation item if user is not authenticated",() =>{
        const wrapper = configure()
    })
})
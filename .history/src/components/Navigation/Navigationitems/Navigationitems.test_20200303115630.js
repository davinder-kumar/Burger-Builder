import { configure, configure, shallow } from "enzyme"
import Adapter  from 'enzyme-adapter-react-16'
import NavigationItems from './Navigationitems'
configure({
    adapter : new Adapter()
})

// import 
describe("<Navigation Items >", () => {
    it("should render two navigation item if user is not authenticated",() =>{
        shallow(<NavigationItems />)
        
    })
})
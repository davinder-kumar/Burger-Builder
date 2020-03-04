import { shallow } from "enzyme"
import BurgerBuilder from './BurgerBuilder'
import BuilderControls from '../../components/UI/'
describe("<BurgerBuilder />",() =>{
    let wrapper = null
    beforeTest =() =>{
        wrapper = shallow(<BurgerBuilder />)
    } 
    it("should render BuildControls is ings is passed",() =>{
        wrapper.find()
    })
})
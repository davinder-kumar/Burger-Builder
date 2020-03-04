import { shallow } from "enzyme"
import BurgerBuilder from './BurgerBuilder'
import BuilderControls from '../../components/Burger/BuildControls/'
describe("<BurgerBuilder />",() =>{
    let wrapper = null
    beforeTest =() =>{
        wrapper = shallow(<BurgerBuilder />)
    } 
    it("should render BuildControls is ings is passed",() =>{
        wrapper.find()
    })
})
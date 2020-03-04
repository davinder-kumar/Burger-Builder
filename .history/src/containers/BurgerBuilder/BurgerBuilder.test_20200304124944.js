import React from 'react'
import { shallow, configure } from "enzyme"
import {BurgerBuilder} from './BurgerBuilder'
import BuilderControls from '../../components/Burger/BuildControls/BuildControls'
import Adapter from 'enzyme-adapter-react-16'

configure({
    adapter : new Adapter()
})

describe("<BurgerBuilder />",() =>{
    let wrapper = null
    beforeEach (() =>{
        wrapper = shallow(<BurgerBuilder initIngredients={()=>{}} />)
    }) 
    it("should render BuildControls if ings is passed",() =>{
        wrapper.setProps({
            ingredients : {
                
            }
        })
        expect(wrapper.find(BuilderControls)).toHaveLength(1)
    })
})
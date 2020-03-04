import React from 'react'
import { shallow } from "enzyme"
import BurgerBuilder from './BurgerBuilder'
import BuilderControls from '../../components/Burger/BuildControls/BuildControls'
describe("<BurgerBuilder />",() =>{
    let wrapper = null
    beforeEach (() =>{
        wrapper = shallow(<BurgerBuilder />)
    }) 
    it("should render BuildControls if ings is passed",() =>{
        wrapper.find(BuildControls).toHaveLength(1)
    })
})
import { configure, shallow } from "enzyme"
import Adapter  from 'enzyme-adapter-react-16'
import NavigationItems from './Navigationitems'
import NavigationItem from './Navigationitem/Navigationitem'
import React from 'react'
configure({
    adapter : new Adapter()
})

describe("<Navigation Items >", () => {
    it("should render two navigation item if user is not authenticated",() =>{
        const wrapper = shallow(<NavigationItems />)
        expect( wrapper.findNavigationItem).toHaveLength(2)
    })
})
import { configure, shallow } from "enzyme"
import Adapter from 'enzyme-adapter-react-16'
import NavigationItems from './Navigationitems'
import NavigationItem from './Navigationitem/Navigationitem'
import React from 'react'
import routes from '../../../routes'
configure({
    adapter: new Adapter()
})

describe("<Navigation Items >", () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />)
    })

    it("should render two navigation item if user is not authenticated", () => {
        // const wrapper = shallow(<NavigationItems />)
        expect(wrapper.find(NavigationItem)).toHaveLength(2)
    })
    it("should render three navigation item if user is  authenticated", () => {
        // const wrapper = shallow(<NavigationItems isAuth={true} />)
        wrapper.setProps({
            isAuth: true
        })
        expect(wrapper.find(NavigationItem)).toHaveLength(3)
    })

    it("should contains logout link if auth is true", () => {
        wrapper.setProps({
            isAuth: true
        })
        // expect(wrapper.contains(<NavigationItem link={routes.logout}>Logout</NavigationItem>)).to.equal(false);
    })

    
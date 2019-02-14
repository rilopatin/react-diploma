import React from 'react'
import CoffeePage from './coffeePage'
import {shallow} from 'enzyme'


describe('Testing <CoffeePage/>', () => {
    const coffee = shallow(<CoffeePage/>)
    it('CoffeePage has been rendered correctly', () => {
        expect(coffee).toMatchSnapshot()
    });

    it('CoffeePage state "error" is false', () => {
        expect(coffee.state.error).toBeFalsy()
    });
})
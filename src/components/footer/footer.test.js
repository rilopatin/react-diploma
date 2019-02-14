import React from 'react'
import Footer from './footer'
import {shallow} from 'enzyme'


describe('Testing <Footer/>', () => {
    it('Footer has been rendered correctly', () => {
        const footer = shallow(<Footer/>)
        expect(footer).toMatchSnapshot();
    })
})
import React from 'react'
import App from './App'
import {shallow} from 'enzyme'


describe('Testing <App/>', () => {
    const app = shallow(<App/>)
    it('App has been rendered correctly', () => {
        expect(app).toMatchSnapshot()
    });
})
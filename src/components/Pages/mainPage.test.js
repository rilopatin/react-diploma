import React from 'react'
import MainPage from './mainPage'
import {shallow} from 'enzyme'


describe('Testing <MainPage/>', () => {
    const main = shallow(<MainPage/>)
    it('MainPage has been rendered correctly', () => {
        expect(main).toMatchSnapshot()
    });

    it('CharacterPage state "error" is false', () => {
        expect(main.state.error).toBeFalsy()
    });
})
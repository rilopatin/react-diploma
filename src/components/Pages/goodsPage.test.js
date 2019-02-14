import React from 'react'
import GoodsPage from './goodsPage'
import {shallow} from 'enzyme'


describe('Testing <GoodsPage/>', () => {
    const goods = shallow(<GoodsPage/>)
    it('CoffeePage has been rendered correctly', () => {
        expect(goods).toMatchSnapshot()
    });

    it('GoodsPage state "error" is false', () => {
        expect(goods.state.error).toBeFalsy()
    });
})
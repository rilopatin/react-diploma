import React from 'react'
import ItemListComponent from './itemListComponent'
import {shallow} from "enzyme/build/index";
import ErrorMessage from '../errorMessage/errorMessage'

describe('Testing <ItemListComponent/>', () => {

    let items = [{name: 'wqw1', country: 'Brazil'}, {name: 'wqw2', country: 'Columbia'}, {name: 'sdgf', country: 'Brazil'}]
    const tempFunc = async () => {
        return await items
    }
        const wrapper = shallow(<ItemListComponent classes={["shop__item", "shop__item-title", "shop__item-price", "shop__wrapper"]}
                                                   getData = {tempFunc}
                                                   renderItem={() => null}
                                                   term = ''
                                                   filter = ''
                                                   details
        />)

    it('ItemListComponent has been rendered correctly', () => {
        expect(wrapper).toMatchSnapshot()
    });

    it('List of 3 items is rendered to 3 instance', () => {
        expect(wrapper.find('li')).toHaveLength(3)
    });

    it('List of 3 items with filter is rendered to 2 instance', () => {
        wrapper.setProps({filter:  'Brazil'})
        expect(wrapper.find('li')).toHaveLength(2)
    });

    it('List of 3 items with filter and term is rendered to 1 instance', () => {
        wrapper.setProps({term:  'wqw'})
        expect(wrapper.find('li')).toHaveLength(1)
    });

    it('ItemListComponent state "error" is false', () => {
        expect(wrapper.state.error).toBeFalsy()
    });

    describe('Handlers tests', () => {
        it('testing onError', () => {
            wrapper.instance().onError(<ErrorMessage code={'404'}/>);
            expect(wrapper.state().loading).toBeFalsy();
            expect(wrapper.state().error).toBeTruthy()
        });
        it('testing onItemSelected', () => {
            wrapper.instance().onItemSelected('1')
            expect(wrapper.state().selectedItem).toEqual('1')
        })

    })
})

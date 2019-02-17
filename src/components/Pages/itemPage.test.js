import React from 'react'
import ItemPage from './itemPage'
import {shallow} from 'enzyme'
import ErrorMessage from '../errorMessage/errorMessage'

//describe('Testing <ItemPage/>', () => {
    const component = shallow(<ItemPage match={{params: {id: 1}, isExact: true, path: "", url: ""}}/> )

    describe('Testing <ItemPage/>', () => {
        it('ItemPage has been rendered correctly', () => {
            expect(component).toMatchSnapshot()
        });
    // describe('renders props <ItemPage/>', () => {
    //     console.log(component.instance().props)
    // })

        it('ItemPage state "loading" is true', () => {
            expect(component.state().loading).toBeTruthy()
        });
        it('ItemPage state "error" is false', () => {
            expect(component.state().error).toBeFalsy()
        });
    });
  //  })
    describe('Handlers tests', () => {
        it('testing onError', () => {
            component.instance().onError(<ErrorMessage code={'404'}/>);
            expect(component.state().loading).toBeFalsy();
            expect(component.state().error).toBeTruthy()
        });
        // it('testing updateItem', () => {
        //     component.instance().updateItem()
        //     expect(component.state().loading).toBeTruthy()
        // })
    })

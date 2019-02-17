import React, {Component} from 'react'

import './coffeepage.sass'

import styled from 'styled-components'
import Header from '../../components/header'
import Footer from '../../components/footer'
import ItemListComponent from '../../components/itemListComponent'
import ErrorMessage from '../../components/errorMessage'
import CoffeeService from '../../services/coffeeService'
import AboutProductComponent from '../../components/aboutProductComponent'

const url = process.env.PUBLIC_URL + '/img/Coffee_bg.jpg';

const Banner = styled.div`
    background: url(${url}) no-repeat;
    height: 260px;
    background-size: cover;
    h1 {
        margin-top: 60px;
    }
    `

export default class CoffeePage extends Component {

    coffeeService = new CoffeeService()

    state = {
        selectedItem: null,
        error: false
    }
    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    classes = ["shop__item", "shop__item-title", "shop__item-price", "shop__wrapper"]

    text =  (
        <div className="shop__text">
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br></br>
            Afraid at highly months do things on at. Situation recommend objection do
            intention<br></br>
            so questions. <br></br>
            As greatly removed calling pleased improve an. Last ask him cold feel<br></br>
            met spot shy want. Children me laughing we prospect answered followed. At it
            went<br></br>
            is song that held help face.
        </div>
    )

    render () {

        const {error } = this.state

        if (error) {
            return <ErrorMessage/>
        }
        const itemList = (
            <ItemListComponent
                getData={this.coffeeService.getAllGoods}
                renderItem={(item) => item.country}
                classes={this.classes}
            />
        )

        return (
            <>
                <Banner className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <Header/>
                            </div>
                        </div>
                        <h1 className="title-big">For your pleasure</h1>
                    </div>
                </Banner>
                <div className="shop">
                    <div className="container">

                        <AboutProductComponent text = {this.text} imgSrc = {process.env.PUBLIC_URL + '/img/coffee_cup.png'}/>

                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                {itemList}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}


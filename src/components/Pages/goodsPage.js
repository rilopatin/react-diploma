import React, {Component} from 'react'

import './coffeepage.sass'
import coffee_cup from '../../img/coffee_cup.png'

import Header from '../../components/header'
import Footer from '../../components/footer'
import ItemListComponent from '../../components/itemListComponent'
import ErrorMessage from '../../components/errorMessage'
import CoffeeService from '../../services/coffeeService'
import AboutProductComponent from '../../components/aboutProductComponent'

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
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <Header/>
                            </div>
                        </div>
                        <h1 className="title-big">For your pleasure</h1>
                    </div>
                </div>
                <div className="shop">
                    <div className="container">

                        <AboutProductComponent text = {this.text} imgSrc = {coffee_cup}/>

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


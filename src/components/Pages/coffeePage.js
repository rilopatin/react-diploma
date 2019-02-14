import React, {Component} from 'react'

import './coffeepage.sass'
import coffee_girl from '../../img/coffee_girl.jpg'

import Header from '../../components/header'
import Footer from '../../components/footer'
import ErrorMessage from '../../components/errorMessage'
import ItemListComponent from '../../components/itemListComponent'
import CoffeeService from '../../services/coffeeService'
import AboutProductComponent from '../../components/aboutProductComponent'
import FilterComponent from '../../components/filterComponent'

export default class CoffeePage extends Component {

    coffeeService = new CoffeeService()

    state = {
        selectedItem: null,
        error: false,
        term: '',
        filter: ''
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    classes = ["shop__item", "shop__item-title", "shop__item-price", "shop__wrapper"]

    text =  (
            <div className="shop__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br></br>
                          Afraid at highly months do things on at. Situation recommend objection do
                          intention<br></br>
                          so questions. <br></br>
                          As greatly removed calling pleased improve an. Last ask him cold feel<br></br>
                          met spot shy want. Children me laughing we prospect answered followed. At it
                          went<br></br>
                          is song that held help face.
            </div>
    )

    setTermOnUpdate = (term) => {
        this.setState({
            term
        })
    }

    setFilter = (filter) => {
        this.setState({
            filter
        })
    }

    render() {

        if (this.state.error) {
            return <ErrorMessage/>
        }
        const itemList =
            <ItemListComponent
                getData={this.coffeeService.getAllCoffee}
                renderItem={(item) => item.country}
                details
                classes={this.classes}
                term = {this.state.term}
                filter = {this.state.filter}
            />

        return (
            <>
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <Header/>
                            </div>
                        </div>
                        <h1 className="title-big">Our Coffee</h1>
                    </div>
                </div>
                <div className="shop">
                    <div className="container">

                        <AboutProductComponent text = {this.text} imgSrc = {coffee_girl}/>

                        <FilterComponent
                            onUpdateSearch={(term) => this.setTermOnUpdate(term)}
                            onFilter={(filter) => this.setFilter(filter)}/>

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


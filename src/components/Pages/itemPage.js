import React, {Component} from 'react'

import './itemPage.sass'

import Header from '../../components/header'
import Footer from '../../components/footer'
import CoffeeService from '../../services/coffeeService'
import Spinner from '../spinner'

export default class ItemPage extends Component {

    coffeeService = new CoffeeService()

    state = {
        id: this.props.match.params.id,
        showItem: null,
        loading: true
    }

    componentDidMount() {
        this.setState({loading: true})
        this.coffeeService.getCoffeeByName(this.state.id)
            .then((showItem) => {
                this.setState({
                    showItem: showItem,
                    loading: false
                })
            })
            .catch(this.onError)
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    render() {

        const {showItem, loading} = this.state

        if( loading) return <Spinner/>

        return (
                <>
                <div className="banner">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <Header/>
                            </div>
                        </div>
                        <h1 className="title-big">{showItem.name}</h1>
                    </div>
                </div>
                <section className="shop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 offset-1">
                                <img className="shop__item-img" src={showItem.url} alt="coffee_item"></img>
                            </div>
                            <div className="col-lg-4">
                                <div className="title">About it</div>
                                <img className="beanslogo" src={process.env.PUBLIC_URL + '/logo/Beans_logo_dark.svg'} alt="Beans logo"></img>
                                <div className="shop__point">
                                    <span>Country:</span>
                                    {showItem.country}
                                </div>
                                <div className="shop__point">
                                    <span>Description:</span>
                                    {showItem.description}
                                </div>
                                <div className="shop__point">
                                    <span>Price:</span>
                                    <span className="shop__point-price">{showItem.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </>
        )
    }
}




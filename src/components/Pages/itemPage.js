import React, {Component} from 'react'

import './itemPage.sass'

import Header from '../../components/header'
import Footer from '../../components/footer'
import CoffeeService from '../../services/coffeeService'
import Spinner from '../spinner'
import ErrorMessage from '../errorMessage'
import styled from "styled-components";

const url = process.env.PUBLIC_URL + '/img/Coffee_bg.jpg';
const Banner = styled.div`
    background: url(${url}) no-repeat;
    height: 260px;
    background-size: cover;
    h1 {
        margin-top: 60px;
    }
    `

export default class ItemPage extends Component {

    coffeeService = new CoffeeService()

    state = {
        id: this.props.match.params.id,
        showItem: null,
        loading: true,
        error: false
    }

    componentDidMount() {
        this.setState({loading: true})
        this.coffeeService.getCoffeeByName(this.state.id)
            .then((showItem) => {
                console.log('showItem'+showItem)
                this.setState({
                    showItem,
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

    block = (showItem) => {
        return <>
        <Banner className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Header/>
                    </div>
                </div>
                <h1 className="title-big">{showItem.name}</h1>
            </div>
        </Banner>
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
    </>}

    render() {

        const {showItem, loading, error} = this.state

        const errorMessage = error ? <ErrorMessage/> : null
        const spinner = loading ? <Spinner/> : null
        const content = !(loading || error) ? this.block(showItem) : null

        return (
            <>
            {errorMessage}
            {spinner}
            {content}
            </>
        )
    }
}




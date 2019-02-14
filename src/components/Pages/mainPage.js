import React, {Component} from "react"

import './mainpage.sass'

import Header from '../../components/header'
import Footer from '../../components/footer'
import JumbotronComponent from '../../components/jumbotronComponent'
import AboutUsComponent from '../../components/aboutUsComponent'
import ItemListComponent from '../../components/itemListComponent'
import ErrorMessage from '../../components/errorMessage'
import CoffeeService from '../../services/coffeeService'

export default class MainPage extends Component {

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

    classes = ["best__item", "best__item-title", "best__item-price", "best__wrapper"]

     render () {

         const {error } = this.state

         const errorMessage = error ? <ErrorMessage/> : null
         const content =
             <ItemListComponent
             getData={this.coffeeService.getAllBest}
             renderItem={() => null}
             details
             classes={this.classes}/>

         return (
             <>
                 <div className="preview">
                     <div className="container">
                         <div className="row">
                             <div className="col-lg-6">
                                 <Header/>
                             </div>
                         </div>
                         <div className="row">
                             <JumbotronComponent/>
                         </div>
                     </div>
                 </div>
                 <AboutUsComponent/>
                 <div className="best">
                     <div className="container">
                         <div className="title">Our best</div>
                         <div className="row">
                             <div className="col-lg-10 offset-lg-1">
                                 {errorMessage}
                                 {content}
                             </div>
                         </div>
                     </div>
                 </div>
                 <Footer/>
             </>
         )
     }
}




import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom'

import {MainPage, CoffeePage, GoodsPage, ItemPage} from '../Pages';

class App extends Component {

    state = {
        itemList: null,
    }


  render() {

    return (
        <Router>
            <div className="App">
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/coffee' exact component={CoffeePage}/>
                    <Route path='/goods' exact component={GoodsPage}/>
                    <Route path='/details/:id' exact component={ItemPage}/>
            </div>
        </Router>
    );
  }
}

export default App;

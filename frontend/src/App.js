import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <a className="brand" href="/">  Maligaikadai</a>
                    </div>
                    <div>
                        <a href="/cart">Cart  <i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
                        <a href="/signIn">Sign In  <i className="fa fa-sign-in" aria-hidden="true"></i></a>
                    </div>
                </header>
                <main>
                    <Route path='/product/:id' component={ProductScreen}></Route>
                    <Route path="/" component={HomeScreen} exact></Route>
                </main>
                <footer className="row center">All right reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
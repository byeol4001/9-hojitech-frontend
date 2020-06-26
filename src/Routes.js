import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import Main from '../src/Pages/Main/Main';
import Login from '../src/Pages/Login/Login';
import LoginClick from '../src/Pages/Login/loginclick';
import SignUp from '../src/Pages/SignUp/SignUp';
import ProductRegister from '../src/Pages/SignUp/productregister';
import Product from '../src/Pages/Product/Product';
import ProductList from '../src/Pages/ProductList/ProductList';
import Cart from '../src/Pages/Cart/Cart'
import './Styles/reset.scss';


class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/header" component={Header} />
                    <Route exact path="/Main" component={Main} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/loginclick" component={LoginClick} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/productregister" component={ProductRegister} />
                    <Route exact path="/product" component={Product} />
                    <Route exact path="/productlist" component={ProductList} />
                    <Route exact path="/footer" component={Footer} />
                    <Route exact path="/cart" component={Cart} />
                </Switch>
            </Router>
        );
    }
}

export default Routes

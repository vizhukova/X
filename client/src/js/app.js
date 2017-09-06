import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';

import App from './components/App';
import Auth from './components/Auth';
import Register from './components/Register';
import Home from './components/Home';
import AlertActions from '../../../common/js/components/Alert/AlertActions';
import NewAddress from './components/addresses/NewAddress';
import Addresses from './components/addresses/Addresses';
import Catalog from './components/category/Categories';
import newCategory from './components/category/newCategory';
import newProduct from './components/product/newProduct';
import Product from './components/product/Product';

function onLeave() {
    AlertActions.onLeave();
}

/**
 * Инициализация приложения
 */
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/home" component={Home} onLeave={onLeave}/>
            <Route path="login" component={Auth} onLeave={onLeave}/>
            <Route path="register" component={Register} onLeave={onLeave}/>
            <Route path="addresses" component={Addresses} onLeave={onLeave}/>
            <Route path="/address" onLeave={onLeave}>
                <Route path="new" component={NewAddress} onLeave={onLeave}/>
                <Route path="edit/:id" component={NewAddress} onLeave={onLeave}/>
            </Route>
            <Route path="/category" component={Catalog} onLeave={onLeave}/>
            <Route path="/category" onLeave={onLeave}>
                <Route path="new" component={newCategory} onLeave={onLeave}/>
                <Route path=":id" component={Catalog} onLeave={onLeave}/>
                <Route path=":id/product/new" component={newProduct} onLeave={onLeave}/>
                <Route path=":id/product/edit/:product_id" component={newProduct} onLeave={onLeave}/>
                <Route path=":id/product/:product_id" component={Product} onLeave={onLeave}/>
            </Route>
        </Route>
    </Router>
), document.getElementById("app-container"));


import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { createHashHistory } from 'history/lib';
var history = createHashHistory({
    queryKey: false
});
import App from './components/App';
import Auth from './components/Auth';
import Register from './components/Register';
import Home from './components/Home';
import AlertActions from '../../../common/js/components/Alert/AlertActions';
import NewAddress from './components/addresses/NewAddress';
import Addresses from './components/addresses/Addresses';

function onLeave() {
    AlertActions.onLeave();
}

/**
 * Инициализация приложения
 */
ReactDOM.render((
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/home" component={Home} onLeave={onLeave}/>
            <Route path="login" component={Auth} onLeave={onLeave}/>
            <Route path="register" component={Register} onLeave={onLeave}/>
            <Route path="/address" onLeave={onLeave}>
                <Route path="new" component={NewAddress} onLeave={onLeave}/>
                <Route path="edit/:id" component={NewAddress} onLeave={onLeave}/>
            </Route>
            <Route path="addresses" component={Addresses} onLeave={onLeave}/>
        </Route>
    </Router>
), document.getElementById("app-container"));


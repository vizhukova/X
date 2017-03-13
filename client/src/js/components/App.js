import React from 'react'
import {RoutingContext, Link} from 'react-router'
import  AuthActions from '../actions/AuthActions';
import AuthStore from './../stores/AuthStore';
import Alert from'../../../../common/js/components/Alert/Alert';
import _  from 'lodash';

/**
 * Основной компонент интерфейса клиента
 */
class Application extends React.Component {

    constructor() {
        super();
        this.state = {
            user: {},
            isActiveTariff: true
        };

        this.update = this.update.bind(this);
        this.updateSettings = this.updateSettings.bind(this);
        this.out = this.out.bind(this);
    }

    componentDidMount() {

        // AuthActions.check()
        //     .then(function() {
        //         AuthActions.getMe();
        //         SettingsActions.getAllCurrencies();
        //         SettingsActions.getTariff();
        //         SettingsActions.getMessages();
        //         return SettingsActions.getBasicCurrency();
        //
        //     });
        //
        // SettingsActions.get();
        //
        AuthStore.listen(this.update);
        // SettingsStore.listen(this.updateSettings);
    }

    componentWillUnmount() {
        AuthStore.unlisten(this.update);
    }

    update(state) {
        if (state.isOut) {
            // location.href = `http://${this.state.auth_domain}/#/auth`;
        }

        if (!state.auth) {
            location.hash = 'login';
        }
        _.assign(this.state, state);
        this.forceUpdate();
    }

    updateSettings(state) {
        _.assign(this.state, state);
        this.setState({});
    }

    out(e) {
        e.preventDefault();
        console.log(this.state);
        AuthActions.out();
    }

    render() {
        return <div className="app">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-brand" href="#"><i className="glyphicon glyphicon-home"/></a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><Link to="/categories" activeClassName="active">Каталог товаров</Link></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                   aria-haspopup="true" aria-expanded="false">Партнерская программа</a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/settings" activeClassName="active">Настройка</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/orders" activeClassName="active">Заказы</Link></li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                   aria-haspopup="true" aria-expanded="false">Настройка</a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/payment" activeClassName="active">Платежи</Link></li>
                                    <li><Link to="/basket" activeClassName="active">Корзина</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
                                   aria-haspopup="true" aria-expanded="false"><i
                                    className="glyphicon glyphicon-user"/>{this.state.user.name}</a>

                                { this.state.auth
                                    ? <ul className="dropdown-menu">
                                        <li>
                                            <a onClick={this.out}>Выход</a>
                                        </li>
                                    </ul>
                                    : <ul className="dropdown-menu">
                                        <li>
                                            <a href="#/login">Войти</a>
                                        </li>
                                    </ul>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Alert />
            {this.props.children}
        </div>
    }
}

export default Application;
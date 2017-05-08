import React from 'react'
import {RoutingContext, Link} from 'react-router'
import  AuthActions from '../actions/AuthActions';
import AuthStore from './../stores/AuthStore';
import Alert from'../../../../common/js/components/Alert/Alert';
import AreYouSureModal from'../../../../common/js/components/AreYouSureModal/AreYouSureModal';

/**
 * Основной компонент интерфейса клиента
 */
class Application extends React.Component {

    constructor() {
        super();
        this.state = {
            auth: AuthStore.getState().auth,
            isActiveTariff: true
        };

        this.update = this.update.bind(this);

        AuthStore.listen(this.update);
    }

    componentWillUnmount() {
        AuthStore.unlisten(this.update);
    }

    update(state) {
        if (state.auth) {
            this.setState({
                auth: state.auth
            });
        }
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
                            <li><Link to="/category" activeClassName="active">Каталог товаров</Link></li>
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
                                    className="glyphicon glyphicon-user"/>{this.state.auth.name}</a>

                                { this.state.auth.id
                                    ? <ul className="dropdown-menu user-dropdown-menu">
                                        <li>
                                            <a>Выход</a>
                                        </li>
                                        <li>
                                            <Link to="/addresses">Адреса</Link>
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
            <AreYouSureModal />
            {this.props.children}
        </div>
    }
}

export default Application;
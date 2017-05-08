import alt from '../alt';
import AuthActions from './../actions/AuthActions';

class AuthStore {

    constructor() {

        var ls = localStorage.getItem('store.auth');
        this.auth = ls ? JSON.parse(ls) : {};

        this.user = {};

        this.bindListeners({
            onRegister: AuthActions.REGISTER,
            onLogin: AuthActions.LOGIN
        });
    }

    onAuth(auth) {
        this.auth = auth;
        localStorage.setItem('store.auth', JSON.stringify(auth));
    }

    onLogOut() {
        this.auth = {};
        localStorage.setItem('store.auth', JSON.stringify({}));
    }

    onRegister(data) {
        var newUser = Object.assign({}, data.user, {token: data.token});
        this.onAuth(newUser);
    }

    onLogin(data) {
        var newUser = Object.assign({}, data.user, {token: data.token});
        this.onAuth(newUser);
    }

}

export default alt.createStore(AuthStore, 'AuthStore');
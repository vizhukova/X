import alt from '../alt';
import AuthActions from './../actions/AuthActions';

class AuthStore {

    constructor() {

        var ls = localStorage.getItem('store.auth');
        this.auth = ls ? JSON.parse(ls) : {
            token: '',
            id: ''
        };

        this.user = {};

        this.bindListeners({
            onRegister: AuthActions.REGISTER
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
        this.user = data.user;
        this.onAuth({id: data.user.id, token: data.token});
    }

}

export default alt.createStore(AuthStore, 'AuthStore');
import alt from './../../alt';
import AlertActions from './AlertActions';
var _ = require('lodash');


class AlertStore {

    constructor() {
        this.messages = [];
        this.types = ['error', 'success', 'info', 'warning'];

        this.bindListeners({
            onSet: AlertActions.SET,
            onHide: AlertActions.HIDE,
            onLeave: AlertActions.ON_LEAVE
        });
    }


    onSet(message) {
        var filter = _.filter(this.messages, (item) => message.text == item.text);
        if(filter.length > 0) return;//если в спике уже есть такое сообщение

        if(message.type == 'success') {
            this.messages = _.filter(this.messages, (item) =>  !(item.type == 'error' || item.type == 'warning'));
        }

        var result = this.types.filter((item) => { return item === message.type; })
        if( result.length == 0 ) message.type = 'info';

        this.messages.push(message);
    }

    onHide(obj) {
        if(! obj.data) this.onLeave();
        else if(typeof(obj.data)  == 'object') {
            this.messages = _.filter(this.messages, (mess) => mess != obj.data);
        }
        else this.messages = _.filter(this.messages, (item, index) => index != obj.data );
    }

    onLeave() {
        this.messages = _.filter(this.messages, (m) => m.id);
    }

}

export default alt.createStore(AlertStore, 'AlertStore');
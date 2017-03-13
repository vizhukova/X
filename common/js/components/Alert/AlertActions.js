import alt from './../../alt';
import _ from 'lodash';

class AlertActions {

    set(data, isAutoHide) {
        this.dispatch(_.assign(data, {isAutoHide: false}));
    }

    hide(data) {
        this.dispatch({data: data});
    }

    onLeave() {
        this.dispatch();
    }

    setMessage(data) {
        var self = this;
         ApiActions.put(`messages/${data.id}`, data.data).then(function(result){
                 self.dispatch(result);
            }).catch(function(err){

            })
    }

}

export default alt.createActions(AlertActions);
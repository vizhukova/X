import alt from './../../alt';
import _ from 'lodash';
import ApiActions from './../../actions/ApiActions';

class AlertActions {

    set(data, isAutoHide) {
        return function (dispatch) {
            dispatch(_.assign(data, {isAutoHide: false}));
        };
    }

    hide(data) {
        return function (dispatch) {
            dispatch({data: data});
        }
    }

    onLeave() {
        return function (dispatch) {
            dispatch();
        }
    }

    setMessage(data) {
        return function (dispatch) {
            ApiActions.put(`messages/${data.id}`, data.data).then(function (result) {
                dispatch(result);
            }).catch(function (err) {

            })
        }
    }

}

export default alt.createActions(AlertActions);
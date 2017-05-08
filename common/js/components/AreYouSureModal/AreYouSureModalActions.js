import alt from './../../alt';
import _ from 'lodash';
import ApiActions from './../../actions/ApiActions';

class AreYouSureModalActions {

    set(data) {
        return function (dispatch) {
            dispatch(data);
        };
    }

}

export default alt.createActions(AreYouSureModalActions);
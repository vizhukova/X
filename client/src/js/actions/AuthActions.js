import alt from '../alt';
import ApiActions from '../actions/ApiActions';

class AuthActions {

    register(formData) {
        return function (dispatch) {
            return ApiActions.post(`seller/register`, formData).then((result) => {
                dispatch(result);
                return result;
            }).catch((err) => {
            })
        }

    }
}

export default alt.createActions(AuthActions);
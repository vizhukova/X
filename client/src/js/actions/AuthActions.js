import alt from '../alt';
import ApiActions from '../../../../common/js/actions/ApiActions';

class AuthActions {

    login(data) {
        var self = this;

        return function (dispatch) {
            return ApiActions.post(`seller/login`, data).then((result) => {
                dispatch(result);
            })
        };
    }


    register(data) {
        return function (dispatch) {
            return ApiActions.post(`seller/register`, data).then((result) => {
                dispatch(result);
                return result;
            })
        }
    }

    // login(data) {
    //     return function (dispatch) {
    //         return ApiActions.post(`seller/login`, data).then((result) => {
    //             dispatch(result);
    //             return result;
    //         }).catch((err) => {
    //         })
    //     }
    // }
}

export default alt.createActions(AuthActions);
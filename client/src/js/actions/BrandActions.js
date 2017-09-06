import alt from '../alt';
import ApiActions from '../../../../common/js/actions/ApiActions';

class BrandActions {

    getAll() {
        return ApiActions.get(`brand`).then((result) => {
            return result.data;
        });
    }

    getByQ(q) {
        return ApiActions.get(`brand?q=${q}`).then((result) => {
            return result.data;
        });
    }

}

export default alt.createActions(BrandActions);
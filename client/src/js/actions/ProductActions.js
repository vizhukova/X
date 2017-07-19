import alt from '../alt';
import ApiActions from '../../../../common/js/actions/ApiActions';

class ProductActions {

    create(data) {
        return ApiActions.post(`product`, data).then((result) => {
            return result.data;
        });
    }

}

export default alt.createActions(ProductActions);
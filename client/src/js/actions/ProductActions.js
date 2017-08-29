import alt from '../alt';
import ApiActions from '../../../../common/js/actions/ApiActions';

class ProductActions {

    create(data) {
        return ApiActions.post(`product`, data).then((result) => {
            return result.data;
        });
    }

    getByCategory(categoryId) {
        return ApiActions.get(`product/category/${categoryId}`).then((result) => {
            return result.data;
        });
    }

    getByQ(q) {
        return ApiActions.get(`product?q=${q}`).then((result) => {
            return result.data;
        });
    }

    getById(id) {
        return ApiActions.get(`product/${id}`).then((result) => {
            return result.data;
        });
    }

    delete(id) {
        return ApiActions.delete(`product/${id}`).then((result) => {
            return result.data;
        });
    }

}

export default alt.createActions(ProductActions);
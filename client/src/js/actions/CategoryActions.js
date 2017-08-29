import alt from '../alt';
import ApiActions from '../../../../common/js/actions/ApiActions';

class CategoryActions {

    getFirstLevel() {
        return ApiActions.get(`categories`).then((result) => {
            return result.data;
        })
    }

    getLevelByParent(parent_id) {
        return ApiActions.get(`categories/${parent_id}`).then((result) => {
            return result.data;
        })
    }

    create(data) {
        return ApiActions.post(`categories`, data).then((result) => {
            return result.data;
        });
    }

    get() {
        return ApiActions.get(`categories/all`).then((result) => {
            return result.data;
        })
    }

    getByQ(q) {
        return ApiActions.get(`categories?q=${q}`).then((result) => {
            return result.data;
        })
    }

}

export default alt.createActions(CategoryActions);
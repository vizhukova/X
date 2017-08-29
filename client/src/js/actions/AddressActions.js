import alt from '../alt';
import ApiActions from '../../../../common/js/actions/ApiActions';

class AddressActions {

    getCountry() {
        return ApiActions.get(`countries`).then((result) => {
            return result.data;
        })
    }

    getDistricts(country_id) {
        return ApiActions.get(`districts?country=${country_id}`).then((result) => {
            return result.data;
        })
    }

    getCities(country_id, district_id) {
        return ApiActions.get(`cities?country=${country_id}&district=${district_id}`).then((result) => {
            return result.data;
        })
    }

    create(data) {
        return ApiActions.post(`address`, data).then((result) => {
            return result.data;
        })
    }

    update(data) {
        return ApiActions.put(`address/${data.id}`, data).then((result) => {
            return result.data;
        })
    }

    get() {
        return ApiActions.get(`addresses`).then((result) => {
            return result.data;
        })
    }

    /**
     * Получение адеса по id
     * @param address_id
     * @returns {Promise|Promise.<T>}
     */
    getById(address_id) {
        return ApiActions.get(`addresses/${address_id}`).then((result) => {
            return result.data;
        })
    }

    remove(address_id) {
        return ApiActions.delete(`address/${address_id}`).then((result) => {
            return result.data;
        })
    }
}

export default alt.createActions(AddressActions);
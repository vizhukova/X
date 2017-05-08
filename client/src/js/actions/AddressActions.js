import alt from '../alt';
import ApiActions from '../../../../common/js/actions/ApiActions';

class AddressActions {

    getCountry() {
        return ApiActions.get(`countries`).then((result) => {
            return result.data;
        }).catch((err) => {
        })
    }

    getDistricts(country_id) {
        return ApiActions.get(`districts?country=${country_id}`).then((result) => {
            return result.data;
        }).catch((err) => {
        })
    }

    getCities(country_id, district_id) {
        return ApiActions.get(`cities?country=${country_id}&district=${district_id}`).then((result) => {
            return result.data;
        }).catch((err) => {
        })
    }

    create(data) {
        return ApiActions.post(`address`, data).then((result) => {
            return result.data;
        }).catch((err) => {
        })
    }

    update(data) {
        return ApiActions.put(`address/${data.id}`, data).then((result) => {
            return result.data;
        }).catch((err) => {
        })
    }

    get() {
        return ApiActions.get(`addresses`).then((result) => {
            return result.data;
        }).catch((err) => {
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
        }).catch((err) => {
        })
    }

    remove(address_id) {
        return ApiActions.delete(`address/${address_id}`).then((result) => {
            return result.data;
        }).catch((err) => {
        })
    }
}

export default alt.createActions(AddressActions);
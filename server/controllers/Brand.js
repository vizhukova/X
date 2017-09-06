var Brand = require('../models/Brand');

module.exports = {

    get() {
        return new Promise((resolve, reject) => {
            Brand.get().then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    },

    getByQ(q) {
        return new Promise((resolve, reject) => {
            Brand.getByQ(q).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    },

};
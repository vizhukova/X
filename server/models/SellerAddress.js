var checkit = require('checkit');
var bookshelf = require('../db');
var knex = require('../knex_connection');

var SellerAddress = bookshelf.Model.extend({

    tableName: 'seller_addresses',

}, {

    add(data) {
        return new Promise((resolve, reject) => {
            knex('seller_addresses')
                .insert(data)
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    },

    getByUserIdArr(user_id) {
        return new Promise((resolve, reject) => {
            knex('seller_addresses')
                .select('*')
                .where({seller_id: user_id})
                .then(res => {
                    var arr = res.map(item => item.addresses_id);
                    resolve(arr);
                })
                .catch(err => reject(err))

        })
    },


});

module.exports = SellerAddress;

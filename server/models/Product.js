var checkit = require('checkit');
var bookshelf = require('../db');
var knex = require('../knex_connection');

var Category = bookshelf.Model.extend({

    tableName: 'products',
    hasTimestamps: true,

    initialize: function () {
        this.on('saving', this.validateSave);
        this.on('updating', this.validateSave);
    },

    validateSave: function () {
        return checkit({
            name: [{
                rule: 'required',
                message: 'Поле "название продукта" обязательно для заполнения'
            }]
        }).run(this.attributes);
    }


}, {

    create(data) {
        var record = new this(data);
        return record.save();
    },

    addImages(data, product_id) {
        return Promise.all(data.map(item => {
            return knex('products_images')
                .insert({
                    product_id: product_id,
                    image: item.path
                })
        }))
    },

    addWholesalePrices(data, product_id) {
        return Promise.all(data.map(item => {
            return knex('products_wholesale_prices')
                .insert({
                    product_id: product_id,
                    price: +item.price,
                    count: +item.count
                })
        }))
    },

    addCountryDeliveryPrices(data, product_id) {
        return Promise.all(data.map(item => {
            return knex('products_country_delivery')
                .insert({
                    product_id: product_id,
                    country_id: +item.data,
                    price: +item.price
                })
        }))
    },

    addDistrictDeliveryPrices(data, product_id) {
        return Promise.all(data.map(item => {
            return knex('products_district_delivery')
                .insert({
                    product_id: product_id,
                    district_id: +item.data,
                    price: +item.price
                })
        }))
    },

    addCityDeliveryPrices(data, product_id) {
        return Promise.all(data.map(item => {
            return knex('products_city_delivery')
                .insert({
                    product_id: product_id,
                    city_id: +item.data,
                    price: +item.price
                })
        }))
    }

});

module.exports = Category;

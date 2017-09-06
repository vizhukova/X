var checkit = require('checkit');
var bookshelf = require('../db');
var knex = require('../knex_connection');

var Product = bookshelf.Model.extend({

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

    update(id, data) {
        return knex('products')
            .where({id})
            .update(data)
            .returning('*')
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

    removeImages(data, product_id) {
        return Promise.all(data.map(item => {
            return knex('products_images')
                .where({
                    product_id: product_id,
                    image: item.path
                })
                .del()
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

    removeWholesalePrices(data, product_id) {
        return Promise.all(data.map(item => {
            return knex('products_wholesale_prices')
                .where({
                    product_id: product_id,
                    price: +item.price,
                    count: +item.count
                })
                .del()
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

    removeCountryDeliveryPrices(data, product_id) {
        return Promise.all(data.map(item => {
            return knex('products_country_delivery')
                .where({
                    product_id: product_id,
                    country_id: +item.data,
                    price: +item.price
                })
                .del()
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

    removeDistrictDeliveryPrices(data, product_id) {
        return Promise.all(data.map(item => {
            return knex('products_district_delivery')
                .where({
                    product_id: product_id,
                    district_id: +item.data,
                    price: +item.price
                })
                .del()
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
    },

    removeCityDeliveryPrices(data, product_id) {
        return Promise.all(data.map(item => {
            return knex('products_city_delivery')
                .where({
                    product_id: product_id,
                    city_id: +item.data,
                    price: +item.price
                })
                .del()
        }))
    },

    getByCategory(categoryId) {
        return knex
            .select('*')
            .from('products')
            .where('category_id', '=', categoryId)
    },

    getByQ(q) {
        return knex
            .select('*')
            .from('products')
            .where(
                knex.raw(`LOWER(name) LIKE LOWER('%${q}%')`)
            )
    },

    getById(id) {
        return new Promise((resolve, reject) => {
            var product = {};

            knex('products')
                .first('id', 'name', 'description', 'price', 'seller_id', 'created_at', 'updated_at', 'category_id', 'brand_id', 'custom_brand_name')
                .where({id})
                .then(data => {
                    product = {
                        id: data.id,
                        name: data.name,
                        description: data.description,
                        price: data.price,
                        seller_id: data.seller_id,
                        created_at: data.created_at,
                        updated_at: data.updated_at,
                        category_id: data.category_id
                    };

                    return new Promise((resolve, reject) => {
                        if (data.brand_id) {
                            knex('brands')
                                .first('*')
                                .where({id: +data.brand_id})
                                .then(data => {
                                    resolve(data);
                                }).catch(err => {
                                reject(err);
                            })
                        } else {
                            resolve({name: data.custom_brand_name});
                        }
                    });

                }).then(data => {
                product.brand = data;
                return knex('categories')
                    .first('id', 'name')
                    .where({id: product.category_id})
                })
                .then(data => {
                    product.category = data;
                    return knex('products_images')
                        .select('image')
                        .where({product_id: product.id})
                })
                .then(data => {
                    product.images = data.map(item => item.image);
                    return knex('products_wholesale_prices')
                        .select('count', 'price', 'product_id')
                        .where({product_id: product.id})
                })
                .then(data => {
                    product.wholesalePrices = data;
                    // return knex
                    //     .select('country.*', 'products_country_delivery.price as price', 'products_country_delivery.country_id')
                    //     .from('products_country_delivery', 'country')
                    //     .innerJoin('country', 'country.id', 'products_country_delivery.country_id')
                    //     .where('products_country_delivery.product_id', '=', product.id)
                })
                .then(data => {
                    // product.countryDelivery = data;
                    return knex
                        .select('district.*', 'products_district_delivery.price as price', 'products_district_delivery.district_id')
                        .from('products_district_delivery', 'district')
                        .innerJoin('district', 'district.id', 'products_district_delivery.district_id')
                        .where('products_district_delivery.product_id', '=', product.id)
                })
                .then(data => {
                    product.districtDelivery = data;
                    return knex
                        .select('city.*', 'products_city_delivery.price', 'products_city_delivery.city_id')
                        .from('products_city_delivery', 'city')
                        .innerJoin('city', 'city.id', 'products_city_delivery.city_id')
                        .where('products_city_delivery.product_id', '=', product.id)
                })
                .then(data => {
                    product.cityDelivery = data;
                    resolve(product);
                })
                .catch(err => {
                    reject(err);
                })
        });
    },

    delete(id) {
        return knex('products')
            .where({id})
            .del();
    }

});

module.exports = Product;

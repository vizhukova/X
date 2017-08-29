var Product = require('../models/Product');

module.exports = {

    create(data){
        return new Promise(function (resolve, reject) {
            var newProduct;
            return Product.create({
                name: data.name,
                description: data.description,
                price: data.price,
                category_id: data.category_id,
                seller_id: data.seller_id
            }).then(function (result) {
                newProduct = result.attributes;
                return Promise.all([
                    Product.addImages(data.images, newProduct.id),
                    Product.addWholesalePrices(data.wholesalePrices, newProduct.id),
                    Product.addCountryDeliveryPrices(data.countryDelivery, newProduct.id),
                    Product.addDistrictDeliveryPrices(data.districtDelivery, newProduct.id),
                    Product.addCityDeliveryPrices(data.cityDelivery, newProduct.id)
                ]);
            }).then(result => {
                resolve(newProduct);
            }).catch(function (err) {
                reject(err);
            })
        })
    },

    getByCategory(categoryId) {
        return new Promise((resolve, reject) => {
            Product.getByCategory(categoryId).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    },

    getByQ(q) {
        return new Promise((resolve, reject) => {
            Product.getByQ(q).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    },

    getById(id) {
        return new Promise((resolve, reject) => {
            Product.getById(id).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    },

    delete(id) {
        return new Promise((resolve, reject) => {
            Product.delete(id).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    }
};
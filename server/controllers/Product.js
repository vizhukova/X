var Product = require('../models/Product');

module.exports = {

    create(data){
        return new Promise(function (resolve, reject) {
            var newProduct;
            var dataToSave = {
                name: data.name,
                description: data.description,
                price: data.price,
                category_id: data.category_id,
                seller_id: data.seller_id,
                main_image: (data.images[0] || {}).path
            };
            if(data.brand.id) {
                dataToSave.brand_id = data.brand.id;
            } else {
                dataToSave.custom_brand_name = data.brand.name;
            }

            return Product.create(dataToSave).then(function (result) {
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

    update(data) {
        return new Promise(function (resolve, reject) {
            var updatedProduct;
            var dataToSave = {
                name: data.name,
                description: data.description,
                price: data.price,
                category_id: data.category_id,
                seller_id: data.seller_id,
                main_image: data.main_image
            };
            if(data.brand.id) {
                dataToSave.brand_id = data.brand.id;
            } else {
                dataToSave.custom_brand_name = data.brand.name;
            }

            return Product.update(+data.id, dataToSave).then(function (result) {
                updatedProduct = result[0];
                return Promise.all([
                    Product.addImages(data.newImages, updatedProduct.id),
                    Product.removeImages(data.removedImages, updatedProduct.id),
                    Product.addWholesalePrices(data.newWholesalePrices, updatedProduct.id),
                    Product.removeWholesalePrices(data.removedWholesalePrices, updatedProduct.id),
                    Product.addCountryDeliveryPrices(data.newCountryDelivery, updatedProduct.id),
                    Product.removeCountryDeliveryPrices(data.removedCountryDelivery, updatedProduct.id),
                    Product.addDistrictDeliveryPrices(data.newDistrictDelivery, updatedProduct.id),
                    Product.removeDistrictDeliveryPrices(data.removedDistrictDelivery, updatedProduct.id),
                    Product.addCityDeliveryPrices(data.newCityDelivery, updatedProduct.id),
                    Product.removeCityDeliveryPrices(data.removedCityDelivery, updatedProduct.id)
                ]);
            }).then(result => {
                resolve(updatedProduct);
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
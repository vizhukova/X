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
    }
};
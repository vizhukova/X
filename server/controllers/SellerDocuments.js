var SellerDocuments = require('../models/SellerDocuments');

module.exports = {

    add(data){
        return new Promise(function(resolve, reject){

            return SellerDocuments.add(data).then(function(model){
                resolve(model.attributes);
            }).catch(function(err){
                reject(err);
            })
        })
    }
};
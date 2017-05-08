var SellerAddress = require('../models/SellerAddress');

module.exports = {

    add(data){
        return new Promise(function(resolve, reject){

            return SellerAddress.add(data).then(function(model){
                resolve(model.attributes);
            }).catch(function(err){
                reject(err);
            })
        })
    },

    getByUserIdArr(user_id){
        return new Promise(function(resolve, reject){

            return SellerAddress.getByUserIdArr(user_id).then(function(data){
                resolve(data);
            }).catch(function(err){
                reject(err);
            })
        })
    }

};
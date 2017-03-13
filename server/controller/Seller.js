var User = require('../models/Seller');

module.exports = {

    add(data){
        return new Promise(function(resolve, reject){

            return User.add(data).then(function(model){
                resolve(model.attributes);
            }).catch(function(err){
                reject(err);
            })
        })
    },

    login(data){
        return new Promise(function(resolve, reject){

            return User.login(data).then(function(model){
                if(!model) { reject({constraint: 'no_user'}); }
                else { resolve(model); }
            }).catch(function(err){
                reject(err);
            })
        })
    }

};
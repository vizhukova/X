var User = require('../models/Users');
// var jwt = require('jwt-simple');

module.exports = {

    register(data){
        return new Promise(function(resolve, reject){

            return User.register(data).then(function(model){

            }).catch(function(err){
                reject(err);
            })
        })
    }
};
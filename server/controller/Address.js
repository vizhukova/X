var Address = require('../models/Address');

module.exports = {

    getCountries(){
        return new Promise(function(resolve, reject){

            return Address.getCountries().then(function(data){
                resolve(data);
            }).catch(function(err){
                reject(err);
            })
        })
    },

    getDistricts(data){
        return new Promise(function(resolve, reject){
            return Address.getDistricts(data).then(function(data){
                resolve(data);
            }).catch(function(err){
                reject(err);
            })
        })
    },

    getCities(data){
        return new Promise(function(resolve, reject){
            return Address.getCities(data).then(function(data){
                resolve(data);
            }).catch(function(err){
                reject(err);
            })
        })
    },

    add(data){
        return new Promise(function(resolve, reject){
            return Address.add(data).then(function(data){
                resolve(data.attributes);
            }).catch(function(err){
                reject(err);
            })
        })
    },

     get(data){
        return new Promise(function(resolve, reject){
            return Address.get(data).then(function(data){
                resolve(data);
            }).catch(function(err){
                reject(err);
            })
        })
    },

};
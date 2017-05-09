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

    getAllDistricts(){
        return new Promise(function(resolve, reject){
            return Address.getAllDistricts().then(function(data){
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

    getAllCities(){
        return new Promise(function(resolve, reject){
            return Address.getAllCities().then(function(data){
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

     getByIdArr(arr_id){
        return new Promise(function(resolve, reject){
            return Address.getByIdArr(arr_id).then(function(data){
                resolve(data);
            }).catch(function(err){
                reject(err);
            })
        })
    },

     getById(address_id){
        return new Promise(function(resolve, reject){
            return Address.getById(address_id).then(function(data){
                resolve(data);
            }).catch(function(err){
                reject(err);
            })
        })
    },

     update(data){
        return new Promise(function(resolve, reject){
            return Address.update(data).then(function(data){
                resolve(data);
            }).catch(function(err){
                reject(err);
            })
        })
    },

     remove(address_id){
        return new Promise(function(resolve, reject){
            return Address.remove(address_id).then(function(data){
                resolve(data);
            }).catch(function(err){
                reject(err);
            })
        })
    },

};
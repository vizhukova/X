var Category = require('../models/Category');
var CategoryCategory = require('../models/CategoryCategory');

module.exports = {

    getHigherestLevel(){
        return new Promise(function (resolve, reject) {
            return Category.getHigherestLevel().then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    },
    getByParentId(parent_id){
        return new Promise(function (resolve, reject) {
            return Category.getByParentId(parent_id).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    },
    create(data){
        var newCategory;
        return new Promise(function (resolve, reject) {
            return Category.create({
                name: data.name,
                seller_id: data.seller_id
            }).then(function (result) {
                newCategory = result.attributes;
                if(data.parent_id) {
                    newCategory.parent_id = data.parent_id;
                    return CategoryCategory.add({
                        parent_id: data.parent_id,
                        children_id: newCategory.id
                    })
                }
            }).then(result => {
                resolve(newCategory);
            }).catch(function (err) {
                reject(err);
            })
        })
    },
    get(){
        return new Promise(function (resolve, reject) {
            return Category.get().then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    },

};
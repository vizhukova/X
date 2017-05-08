var checkit = require('checkit');
var bookshelf = require('../db');
var knex = require('../knex_connection');

var Category = bookshelf.Model.extend({

    tableName: 'categories',

    initialize: function () {
        this.on('saving', this.validateSave);
        // this.on('updating', this.validateSave);
    },

    validateSave: function () {
        return checkit({
            name: [{
                rule: 'required',
                message: 'Поле "название категории" обязательно для заполнения'
            }]
        }).run(this.attributes);
    }


}, {

    getHigherestLevel: function () {
        return new Promise((resolve, reject) => {
            knex
                .select('*')
                .from('category_category')
                .then((res) => {
                    var categoryCategory = res.map(item => item.children_id);

                    return knex
                        .select('*')
                        .from('categories')
                        .whereNotIn('id', categoryCategory)

                }).then(res => {
                resolve(res);
            }).catch((err) => {
                reject(err);
            })
        });
    },

    getByParentId: function (id) {
        return knex
            .select('categories.*')
            .from('categories')
            .innerJoin('category_category', 'category_category.children_id', 'categories.id')
            .where('category_category.parent_id', '=', id)
    },

    create(data) {
        var record = new this(data);
        return record.save();
    },

    get() {
        return knex
            .select('*')
            .from('categories')
    }

});

module.exports = Category;

var checkit = require('checkit');
var bookshelf = require('../db');
var knex = require('../knex_connection');

var CategoryCategory = bookshelf.Model.extend({

    tableName: 'category_category',

    initialize: function () {
        this.on('saving', this.validateSave);
        // this.on('updating', this.validateSave);
    },

    validateSave: function () {
        return checkit({
            parent_id: [{
                rule: 'required',
                message: 'Поле "parent_id" обязательно для заполнения'
            }],
            children_id: [{
                rule: 'required',
                message: 'Поле "children_id" обязательно для заполнения'
            }]
        }).run(this.attributes);
    }


}, {

    add: function (data) {
        return knex
            .insert(data)
            .into('category_category')
    }

});

module.exports = CategoryCategory;

var checkit = require('checkit');
var bookshelf = require('../db');
var knex = require('../knex_connection');

var Brand = bookshelf.Model.extend({

    tableName: 'brands',

    initialize: function () {
        // this.on('saving', this.validateSave);
        // this.on('updating', this.validateSave);
    },

    // validateSave: function () {
    //     return checkit({
    //         name: [{
    //             rule: 'required',
    //             message: 'Поле "название продукта" обязательно для заполнения'
    //         }]
    //     }).run(this.attributes);
    // }


}, {

    get() {
        return knex('brands')
            .select('*')
    },

    getByQ(q) {
        return knex
            .select('*')
            .from('brands')
            .where(
                knex.raw(`LOWER(name) LIKE LOWER('%${q}%')`)
            )
    }

});

module.exports = Brand;

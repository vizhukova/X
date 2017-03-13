// var checkit = require('checkit');
var bookshelf = require('../db');
var knex = require('../knex_connection');

var Files = bookshelf.Model.extend({

    tableName: 'documents',
    hasTimestamps: true,

}, {

    add(data) {
        var record = new this(data);
        return record.save();
    }

});

module.exports = Files;

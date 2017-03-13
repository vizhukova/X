var checkit = require('checkit');
var bookshelf = require('../db');
var knex = require('../knex_connection');

var SellerDocuments = bookshelf.Model.extend({

    tableName: 'seller_documents',

}, {

    add(data) {
        var record = new this(data);
        return record.save();
    }

});

module.exports = SellerDocuments;

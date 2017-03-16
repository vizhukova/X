var checkit = require('checkit');
var bookshelf = require('../db');
var knex = require('../knex_connection');

var Address = bookshelf.Model.extend({

    tableName: 'addresses',

    // hasTimestamps: true,

    initialize: function () {
        this.on('saving', this.validateSave);
        // this.on('updating', this.validateSave);
    },

    validateSave: function () {
        return checkit({
            name: [{
                rule: 'required',
                message: 'Поле "название адреса" обязательно для заполнения'
            }],
            country_id: [{
                rule: 'required',
                message: 'Поле "страна" обязательно для заполнения'
            }],
            city_id: [{
                rule: 'required',
                message: 'Поле "город" обязательно для заполнения'
            }],
            district_id: [{
                rule: 'required',
                message: 'Поле "область" обязательно для заполнения'
            }],
            zip_code: [{
                rule: 'required',
                message: 'Поле "почтовый индекс" обязательно для заполнения'
            }]
        }).run(this.attributes);
    }


}, {

    add(address) {
        var record = new this(address);
        return record.save();
    },

    getCountries() {
        return knex('country')
            .select()
    },

    getDistricts(data) {
        return knex('district')
            .select()
            .where({
                country_id: data.country_id
            })
    },

    getCities(data) {
        return knex('city')
            .select()
            .where({
                country_id: data.country_id,
                district_id: data.district_id
            })
    },

    get() {
        return knex('addresses')
            .select([
                'city.name as city_name',
                'country.name as country_name',
                'district.name as district_name',
                'addresses.*',
            ])
            .join('city', 'addresses.city_id', 'city.id')
            .join('district', 'addresses.district_id', 'district.id')
            .join('country', 'addresses.country_id', 'country.id')
    },

});

module.exports = Address;

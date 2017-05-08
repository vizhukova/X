var checkit = require('checkit');
var bookshelf = require('../db');
var knex = require('../knex_connection');

var Seller = bookshelf.Model.extend({

    tableName: 'seller',

    hasTimestamps: true,

    initialize: function () {
        this.on('saving', this.validateSave);
        // this.on('updating', this.validateSave);
    },

    validateSave: function () {
        return checkit({
            name: [{
                rule: 'required',
                message: 'Поле "ФИО" обязательно для заполнения'
            }],
            email: [{
                rule: 'required',
                message: 'Поле "эл. почта" обязательно для заполнения'
            }],
            legal_entity: [{
                rule: 'required',
                message: 'Поле "юридическое лицо" обязательно для заполнения'
            }],
            birthday: [{
                rule: 'required',
                message: 'Поле "день рождения" обязательно для заполнения'
            }]
        }).run(this.attributes);
    }


}, {

    add(data) {
        var record = new this(data);
        return record.save();
    },

    login(user) {
        return new Promise((resolve, reject) => {
            if (!user.email || !user.password) reject(new Error('Email и пароль обязательны'));

            knex('seller')
                .where({email: user.email.toLowerCase().trim()})
                .first('*')
                .then(res => resolve(res))
                .catch(err => reject(err))

        })
    },

    getById: function (id) {
        return new Promise((resolve, reject) => {
            knex
                .first()
                .from('seller')
                .where('id', '=', id)
                .then((res) => {
                    resolve(res)
                }).catch((err) => {
                reject(err)
            })
        })
    }

});

module.exports = Seller;


exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('seller').del(),

    // Inserts seed entries
    knex('seller').insert({
        email: 'admin@gmail.com',
        login: 'admin',
        name: 'Admin Admin',
        password: '123',
        legal_entity: 'private_person',
        birthday: 'Wed Jul 19 2017 15:00:12 GMT+0300 (EEST)'
    })
  );
};

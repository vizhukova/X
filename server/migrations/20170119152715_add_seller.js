
var legalEntityArr = [
    'private_person', //частное лицо
    'individual_entrepreneur', //ФОП
    'limited_liability', //ТОВ
];

exports.up = function(knex, Promise) {
  return knex.schema.createTable('seller', function(t){
      t.increments('id');
      t.string('email').unique().notNullable();
      t.string('login').unique().notNullable();
      t.string('name').notNullable();
      t.string('password').notNullable();
      t.string('birthday').notNullable();
      t.string('avatar');
      t.enu('legal_entity', legalEntityArr);
      t.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('seller');
};

exports.up = function(knex, Promise) {
  return knex.schema.createTable('buyer', function(t){
      t.increments('id');
      t.string('email').unique().notNullable();
      t.string('login').unique().notNullable();
      t.string('name').notNullable();
      t.string('password').notNullable();
      t.string('birthday').notNullable();
      t.string('avatar');
      t.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('buyer');
};
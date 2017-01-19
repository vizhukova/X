
exports.up = function(knex, Promise) {
   return knex.schema.createTable('country', function(t){
      t.increments('id');
      t.string('name').unique().notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('country');
};

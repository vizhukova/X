
exports.up = function(knex, Promise) {
   return knex.schema.createTable('telephones', function(t){
      t.increments('id');
      t.string('telephone').notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('telephones');
};


exports.up = function(knex, Promise) {
   return knex.schema.createTable('brand', function(t){
      t.increments('id');
      t.string('name').unique().notNullable();
      t.string('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('brand');
};
